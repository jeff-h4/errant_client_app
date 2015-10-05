//INPUT PROPS 
//webServerBase - Base URL of web server
var DashboardPage = React.createClass({
  getInitialState: function() {
    return {
      displayState: "summary",
      posted_errands: {},
      accepted_errands:  {},
      pending_errands:  {},
      completed_errands:  {}
    };
  },
  componentDidMount: function() {
    $.ajax({
      method: "GET",
      url: this.props.webServerBase + "/errands.json",
      success: function(data) {
        if (data.result === "success") {
          console.log(data);
          console.log(data.my_posted_errands);
          console.log(data.my_accepted_errands);
          this.setState({
            posted_errands: data.my_posted_errands,
            accepted_errands: data.my_accepted_errands
          });
        } else {
          console.log("DashboardPage componentDidMount(): Ajax Error");
        }
      }.bind(this)
    });
  },
  //Caller: Child
  processErrandTileClick: function(clickedElement) {
    if (clickedElement === "Posted") {
      this.setState({displayState: "displayPosted"});
    } else {
      console.log("DASHBOARD_PAGE processErrandTileClick(): Unsupported clicked element");
    }
  },
  render: function() {
    //var postedErrandTile = function() {
    //  this.state.posted_errands.map(function(p) {
    //    return <div className=""></div>;
    //  });
    //};
    //var acceptedErrandTile = function() {
    //};

    //<ErrandTile tilename="Posted" numErrands={_.size(this.state.posted_errands)}
    if (this.state.displayState === "summary")  {
      return  <div className="section-summary">
                <div className="dashheader">
                  <h1>Errant Dashboard</h1>
                </div>
                <div className="dashmain">
                  <div className="row">
                    <div className="col-xs-5 col-xs-offset-1 thumbnail posted-errand-tile">
                      <ErrandTile tile_title="Posted" 
                                  errand_count={_.size(this.state.posted_errands)}
                                  parentCallback={this.processErrandTileClick}/>
                    </div>
                    <div className="col-xs-offset-1 col-xs-5 thumbnail accepted-errand-tile">
                      <ErrandTile tile_title="Accepted" 
                                  errand_count={_.size(this.state.accepted_errands)}
                                  parentCallback={this.processErrandTileClick}/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-6 col-xs-offset-1 thumbnail pending-errand-tile">
                      <ErrandTile tile_title="Pending" 
                                  errand_count={_.size(this.state.pending_errands)}
                                  parentCallback={this.processErrandTileClick}/>
                    </div>
                    <div className="col-xs-offset-1 col-xs-6 thumbnail completed-errand-tile">
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
    } else if (this.state.displayState === "displayPosted") {
      return  <div className="section-posted-errands">
                <div className="dashheader">
                  <h1>Posted Errands</h1>
                </div>
                <div className="dashmain">
                  <p>PostedErrands Content</p>
                </div>
                <div className="dashfooter">
                </div>
              </div>;
      //END return 'displayPosted'
    } else if (this.state.displayState === "displayAccepted") {
      //END return 'displayAccepted'
    } else {
      return  <div>
                <p>Dashboard_Page entered unsupported state {this.state.displayState}</p>
              </div>;
      //END return 'Unsuported State'
    }

  }
});
