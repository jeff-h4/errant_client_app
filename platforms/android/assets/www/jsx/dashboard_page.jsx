//INPUT PROPS 
//webServerBase - Base URL of web server
//VALID STATES for displayState
// - summary,
//   displayAddErrandForm, displayPosted, 
//   displayAccepted, displayCompleted
var DashboardPage = React.createClass({
  getInitialState: function() {
    return {
      displayState: "summary",
      posted_errands: [],
      accepted_errands:  [],
      completed_errands: [] 
    };
  },
  componentDidMount: function() {
    this.updateErrandsInfo();
  },
  updateErrandsInfo: function() {
    $.ajax({
      method: "GET",
      url: this.props.webServerBase + "/errands.json",
      success: function(data) {
        if (data.result === "success") {
          console.log("data");
          console.log(data);
          console.log("my_posted_errands");
          console.log(typeof(data.my_posted_errands));
          this.setState({
            posted_errands: data.my_posted_errands,
            accepted_errands: data.my_accepted_errands,
            completed_errands: data.my_completed_errands
          });
        } else {
          console.log("DashboardPage updateErrandsInfo(): Ajax Error");
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
    } else {
      console.log("DASHBOARD_PAGE processErrandTileClick(): Unsupported clicked element");
    }
  },
  render: function() {
    var posted_errand_tags = this.state.posted_errands.map(function(oneErrand) {
                                return <ErrandItem id={oneErrand.id}
                                                   owner={oneErrand.owner}
                                                   title={oneErrand.title}
                                                   runner={oneErrand.runner}
                                                   price={oneErrand.price}
                                                   store={oneErrand.store}
                                                   aasm_state={oneErrand.aasm_state}
                                                   webServerBase={this.props.webServerBase}
                                                   />;
                             }.bind(this));
    var accepted_errand_tags = this.state.accepted_errands.map(function(oneErrand) {
                                return <ErrandItem id={oneErrand.id}
                                                 owner={oneErrand.owner}
                                                 title={oneErrand.title}
                                                 runner={oneErrand.runner}
                                                 price={oneErrand.price}
                                                 store={oneErrand.store}
                                                 aasm_state={oneErrand.aasm_state}
                                                 webServerBase={this.props.webServerBase}
                                                 />;
                             }.bind(this));
    var completed_errand_tags = this.state.completed_errands.map(function(oneErrand) {
                                return <ErrandItem id={oneErrand.id}
                                                 owner={oneErrand.owner}
                                                 title={oneErrand.title}
                                                 runner={oneErrand.runner}
                                                 price={oneErrand.price}
                                                 store={oneErrand.store}
                                                 aasm_state={oneErrand.aasm_state}
                                                 webServerBase={this.props.webServerBase}
                                                 />;
                             }.bind(this));
    if (this.state.displayState === "summary")  {
      return  <div className="section-summary">
                <div className="dashheader">
                  <h1>Errant Dashboard</h1>
                </div>
                <div className="dashmain">
                  <div className="row">
                    <button type="button" className="btn btn-info" onClick={this.processLocalNewErrandClick}>+ New Errand</button>
                  </div>
                  <div className="row">
                    <div className="col-xs-5 col-xs-offset-1 thumbnail posted-errand-tile">
                      <ErrandTile tile_title="Posted" 
                                  errand_count={_.size(this.state.posted_errands)}
                                  parentCallback={this.processErrandTileClick}/>
                    </div>
                    <div className="col-xs-5 thumbnail accepted-errand-tile">
                      <ErrandTile tile_title="Accepted" 
                                  errand_count={_.size(this.state.accepted_errands)}
                                  parentCallback={this.processErrandTileClick}/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-5 thumbnail completed-errand-tile">
                      <ErrandTile tile_title="Completed" 
                                  errand_count={_.size(this.state.completed_errands)}
                                  parentCallback={this.processErrandTileClick}/>
                    </div>
                  </div>
                </div>
                <div className="dashfooter">
                </div>
              </div>;
      //END return 'summary'
    } else if (this.state.displayState === "displayAddErrandForm") {
      return  <div className="section-add-errand-form">
                <AddErrandForm webServerBase={this.props.webServerBase}
                               parentCallback={this.processChildAddErrandFormCallback} />
              </div>;
    } else if (this.state.displayState === "displayPosted") {
      return  <div className="section-posted-errands">
                <div className="dashheader">
                  <h1>Posted Errands</h1>
                </div>
                <div className="dashmain">
                  {posted_errand_tags}
                </div>
                <div className="dashfooter">
                </div>
              </div>;
      //END return 'displayPosted'
    } else if (this.state.displayState === "displayAccepted") {
      return  <div className="section-accepted-errands">
                <div className="dashheader">
                  <h1>Accepted Errands</h1>
                </div>
                <div className="dashmain">
                  {accepted_errand_tags}
                </div>
                <div className="dashfooter">
                </div>
              </div>;
      //END return 'displayAccepted'
     } else if (this.state.displayState === "displayCompleted") {
      return  <div className="section-completed-errands">
                <div className="dashheader">
                  <h1>Completed Errands</h1>
                </div>
                <div className="dashmain">
                  {completed_errand_tags}
                </div>
                <div className="dashfooter">
                </div>
              </div>;
      //END return 'displayCompleted' 
    } else {
      return  <div>
                <p>Dashboard_Page entered unsupported state {this.state.displayState}</p>
              </div>;
      //END return 'Unsupported State'
    }

  }
});
