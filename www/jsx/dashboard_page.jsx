//INPUT PROPS 
//webServerBase - Base URL of web server
//VALID STATES for displayState
// - summary,
//   displayAddErrandForm, 
//   displayMine, displayPosted, 
//   displayAccepted, displayCompleted
//
var DashboardPage = React.createClass({
  backKeyDown: function() {
    console.log("Back Key hit on Dashboard Page");
    if (this.state.displayState === "summary") {
      if (confirm("Log Out?")) {
        this.props.parentSignOut();
      }
    } else if ((this.state.displayState === "displayAddErrandForm") ||
               (this.state.displayState === "displayMine") || 
               (this.state.displayState === "displayPosted") || 
               (this.state.displayState === "displayAccepted") || 
               (this.state.displayState === "displayCompleted")) {
      this.updateErrandsInfo();
      this.setState({displayState: "summary"});
    }
  },
  getInitialState: function() {
    return {
      displayState: "summary",
      my_errands: [],
      posted_errands: [],
      accepted_errands:  [],
      completed_errands: [] 
    };
  },
  componentDidMount: function() {
    $.mobile.initializePage();
    this.updateErrandsInfo();
    document.addEventListener("backbutton", this.backKeyDown, true);
  },
  componentWillUnmount: function() {
    document.removeEventListener("backbutton", this.backKeyDown, true);
  },
  updateErrandsInfo: function() {
    $.ajax({
      method: "GET",
      url: this.props.webServerBase + "/errands.json",
      success: function(data) {
        if (data.result === "success") {
          console.log("data");
          console.log(data);
          console.log("other_posted_errands");
          console.log(typeof(data.other_posted_errands));
          this.setState({
            posted_errands:     data.other_posted_errands,
            accepted_errands:   data.my_accepted_errands,
            completed_errands:  data.my_completed_errands,
            my_errands:         data.my_errands
          });
        } else {
          console.log("DashboardPage updateErrandsInfo(): Ajax Error");
          console.log(data);
        }
      }.bind(this)
    });
  },
  processLocalNewErrandClick: function() {
    this.setState({displayState: "displayAddErrandForm"});
  },
  processChildAddErrandFormCallback: function() {
    console.log("DashboardPage AddErrand was successful");
    this.setState({displayState: "summary"});
    $.mobile.initializePage();
    this.updateErrandsInfo();
  },
  //Caller: Child
  processErrandTileClick: function(clickedElement) {
    if (clickedElement === "Posted") {
      this.setState({displayState: "displayPosted"});
    } else if (clickedElement === "Accepted") {
      this.setState({displayState: "displayAccepted"});
    } else if (clickedElement === "Completed") {
      this.setState({displayState: "displayCompleted"});
    } else if (clickedElement === "All My Errands") {
      this.setState({displayState: "displayMine"});
    } else {
      console.log("DASHBOARD_PAGE processErrandTileClick(): Unsupported clicked element");
    }
  },
  render: function() {
    var posted_errand_tags = this.state.posted_errands.map(function(oneErrand) {
                                return <ErrandItem id={oneErrand.id}
                                                   owner_first_name={oneErrand.owner_first_name}
                                                   owner_last_name={oneErrand.owner_last_name}
                                                   title={oneErrand.title}
                                                   item_name={oneErrand.item_name}
                                                   runner_first_name={oneErrand.runner_last_name}
                                                   runner_last_name={oneErrand.runner_last_name}
                                                   price={oneErrand.price}
                                                   store={oneErrand.store}
                                                   aasm_state={oneErrand.aasm_state}
                                                   webServerBase={this.props.webServerBase}
                                                   />;
                             }.bind(this));
    var accepted_errand_tags = this.state.accepted_errands.map(function(oneErrand) {
                                return <ErrandItem id={oneErrand.id}
                                                   owner_first_name={oneErrand.owner_first_name}
                                                   owner_last_name={oneErrand.owner_last_name}
                                                   title={oneErrand.title}
                                                   item_name={oneErrand.item_name}
                                                   runner_first_name={oneErrand.runner_last_name}
                                                   runner_last_name={oneErrand.runner_last_name}
                                                   price={oneErrand.price}
                                                   store={oneErrand.store}
                                                   aasm_state={oneErrand.aasm_state}
                                                   webServerBase={this.props.webServerBase}
                                                   />;
                             }.bind(this));
    var completed_errand_tags = this.state.completed_errands.map(function(oneErrand) {
                                return <ErrandItem id={oneErrand.id}
                                                   owner_first_name={oneErrand.owner_first_name}
                                                   owner_last_name={oneErrand.owner_last_name}
                                                   title={oneErrand.title}
                                                   item_name={oneErrand.item_name}
                                                   runner_first_name={oneErrand.runner_last_name}
                                                   runner_last_name={oneErrand.runner_last_name}
                                                   price={oneErrand.price}
                                                   store={oneErrand.store}
                                                   aasm_state={oneErrand.aasm_state}
                                                   webServerBase={this.props.webServerBase}
                                                   />;
                             }.bind(this));
    var my_errand_tags = this.state.my_errands.map(function(oneErrand) {
                                return <ErrandItem id={oneErrand.id}
                                                   owner_first_name={oneErrand.owner_first_name}
                                                   owner_last_name={oneErrand.owner_last_name}
                                                   title={oneErrand.title}
                                                   item_name={oneErrand.item_name}
                                                   runner_first_name={oneErrand.runner_last_name}
                                                   runner_last_name={oneErrand.runner_last_name}
                                                   price={oneErrand.price}
                                                   store={oneErrand.store}
                                                   aasm_state={oneErrand.aasm_state}
                                                   webServerBase={this.props.webServerBase}
                                                   />;
                             }.bind(this));

    if (this.state.displayState === "summary")  {
      return  <div className="dashboard-summary">
                <div className="page-header dash-header">
                  <h1>Errant Dashboard</h1>
                </div>
                <div className="dash-content">
                  <div className="row">
                    <div className="col-xs-6">
                      <ErrandTile tile_title="Posted" 
                                  tile_color="tile-yellow"
                                  errand_count={_.size(this.state.posted_errands)}
                                  parentCallback={this.processErrandTileClick}/>
                    </div>
                    <div className="col-xs-6">
                      <ErrandTile tile_title="Accepted" 
                                  tile_color="tile-red"
                                  errand_count={_.size(this.state.accepted_errands)}
                                  parentCallback={this.processErrandTileClick}/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-6">
                      <ErrandTile tile_title="Completed" 
                                  tile_color="tile-green"
                                  errand_count={_.size(this.state.completed_errands)}
                                  parentCallback={this.processErrandTileClick}/>
                    </div>
                    <div className="col-xs-6">
                      <ErrandTile tile_title="All My Errands" 
                                  tile_color="tile-black"
                                  errand_count={_.size(this.state.my_errands)}
                                  parentCallback={this.processErrandTileClick}/>
                    </div>
                  </div>
                </div>
                <footer className="footer">
                    <button type="button" className="btn btn-info" onClick={this.processLocalNewErrandClick}>+ New Errand</button>
                </footer>
              </div>;
      //END return 'summary'
    } else if (this.state.displayState === "displayAddErrandForm") {
      return  <div className="dashboard-add-errand-form">
                <AddErrandForm webServerBase={this.props.webServerBase}
                               parentCallback={this.processChildAddErrandFormCallback} />
              </div>;
    } else if (this.state.displayState === "displayPosted") {
      return  <div className="section-posted-errands">
                <div className="page-header dash-header">
                  <h1>Posted Errands</h1>
                </div>
                <div className="panel panel-default">
                  {posted_errand_tags}
                </div>
                <div className="dash-footer">
                </div>
              </div>;
      //END return 'displayPosted'
    } else if (this.state.displayState === "displayAccepted") {
      return  <div className="dashboard-accepted-errands">
                <div className="dash-header page-header">
                  <h1>Accepted Errands</h1>
                </div>
                <div className="panel panel-default dash-main">
                  {accepted_errand_tags}
                </div>
                <div className="dash-footer">
                </div>
              </div>;
      //END return 'displayAccepted'
     } else if (this.state.displayState === "displayCompleted") {
      return  <div className="dashboard-completed-errands">
                <div className="dash-header page-header">
                  <h1>Completed Errands</h1>
                </div>
                <div className="dash-main panel panel-default">
                  {completed_errand_tags}
                </div>
                <div className="dash-footer">
                </div>
              </div>;
      //END return 'displayCompleted' 
     } else if (this.state.displayState === "displayMine") {
      return  <div className="dashboard-my-errands">
                <div className="dash-header page-header">
                  <h1>My Errands</h1>
                </div>
                <div className="dash-main panel panel-default">
                  {my_errand_tags}
                </div>
                <div className="dash-footer">
                </div>
              </div>;
      //END return 'displayMine'
    } else {
      return  <div className="dashboard-unsupported-state">
                <p>Dashboard_Page entered unsupported state {this.state.displayState}</p>
              </div>;
      //END return 'Unsupported State'
    }

  }
});
