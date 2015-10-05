//INPUT PROPS 
//webServerBase - Base URL of web server
var DashboardPage = React.createClass({displayName: "DashboardPage",
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
      return  React.createElement("div", {className: "section-summary"}, 
                React.createElement("div", {className: "dashheader"}, 
                  React.createElement("h1", null, "Errant Dashboard")
                ), 
                React.createElement("div", {className: "dashmain"}, 
                  React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-xs-5 col-xs-offset-1 thumbnail posted-errand-tile"}, 
                      React.createElement(ErrandTile, {tile_title: "Posted", 
                                  errand_count: _.size(this.state.posted_errands), 
                                  parentCallback: this.processErrandTileClick})
                    ), 
                    React.createElement("div", {className: "col-xs-offset-1 col-xs-5 thumbnail accepted-errand-tile"}, 
                      React.createElement(ErrandTile, {tile_title: "Accepted", 
                                  errand_count: _.size(this.state.accepted_errands), 
                                  parentCallback: this.processErrandTileClick})
                    )
                  ), 
                  React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-xs-6 col-xs-offset-1 thumbnail pending-errand-tile"}, 
                      React.createElement(ErrandTile, {tile_title: "Pending", 
                                  errand_count: _.size(this.state.pending_errands), 
                                  parentCallback: this.processErrandTileClick})
                    ), 
                    React.createElement("div", {className: "col-xs-offset-1 col-xs-6 thumbnail completed-errand-tile"}, 
                      React.createElement(ErrandTile, {tile_title: "Completed", 
                                  errand_count: _.size(this.state.completed_errands), 
                                  parentCallback: this.processErrandTileClick})
                    )
                  )
                ), 
                React.createElement("div", {className: "dashfooter"}
                )
              );
      //END return 'summary'
    } else if (this.state.displayState === "displayPosted") {
      return  React.createElement("div", {className: "section-posted-errands"}, 
                React.createElement("div", {className: "dashheader"}, 
                  React.createElement("h1", null, "Posted Errands")
                ), 
                React.createElement("div", {className: "dashmain"}, 
                  React.createElement("p", null, "PostedErrands Content")
                ), 
                React.createElement("div", {className: "dashfooter"}
                )
              );
      //END return 'displayPosted'
    } else if (this.state.displayState === "displayAccepted") {
      //END return 'displayAccepted'
    } else {
      return  React.createElement("div", null, 
                React.createElement("p", null, "Dashboard_Page entered unsupported state ", this.state.displayState)
              );
      //END return 'Unsuported State'
    }

  }
});
