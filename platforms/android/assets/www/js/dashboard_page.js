//INPUT PROPS 
//webServerBase - Base URL of web server
//VALID STATES for displayState
// - summary,
//   displayAddErrandForm, displayPosted, 
//   displayAccepted, displayCompleted
var DashboardPage = React.createClass({displayName: "DashboardPage",
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
                                return React.createElement(ErrandItem, {id: oneErrand.id, 
                                                   owner: oneErrand.owner, 
                                                   title: oneErrand.title, 
                                                   runner: oneErrand.runner, 
                                                   price: oneErrand.price, 
                                                   store: oneErrand.store, 
                                                   aasm_state: oneErrand.aasm_state, 
                                                   webServerBase: this.props.webServerBase}
                                                   );
                             }.bind(this));
    var accepted_errand_tags = this.state.accepted_errands.map(function(oneErrand) {
                                return React.createElement(ErrandItem, {id: oneErrand.id, 
                                                 owner: oneErrand.owner, 
                                                 title: oneErrand.title, 
                                                 runner: oneErrand.runner, 
                                                 price: oneErrand.price, 
                                                 store: oneErrand.store, 
                                                 aasm_state: oneErrand.aasm_state, 
                                                 webServerBase: this.props.webServerBase}
                                                 );
                             }.bind(this));
    var completed_errand_tags = this.state.completed_errands.map(function(oneErrand) {
                                return React.createElement(ErrandItem, {id: oneErrand.id, 
                                                 owner: oneErrand.owner, 
                                                 title: oneErrand.title, 
                                                 runner: oneErrand.runner, 
                                                 price: oneErrand.price, 
                                                 store: oneErrand.store, 
                                                 aasm_state: oneErrand.aasm_state, 
                                                 webServerBase: this.props.webServerBase}
                                                 );
                             }.bind(this));
    if (this.state.displayState === "summary")  {
      return  React.createElement("div", {className: "section-summary"}, 
                React.createElement("div", {className: "dashheader"}, 
                  React.createElement("h1", null, "Errant Dashboard")
                ), 
                React.createElement("div", {className: "dashmain"}, 
                  React.createElement("div", {className: "row"}, 
                    React.createElement("button", {type: "button", className: "btn btn-info", onClick: this.processLocalNewErrandClick}, "+ New Errand")
                  ), 
                  React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-xs-5 col-xs-offset-1 thumbnail posted-errand-tile"}, 
                      React.createElement(ErrandTile, {tile_title: "Posted", 
                                  errand_count: _.size(this.state.posted_errands), 
                                  parentCallback: this.processErrandTileClick})
                    ), 
                    React.createElement("div", {className: "col-xs-5 thumbnail accepted-errand-tile"}, 
                      React.createElement(ErrandTile, {tile_title: "Accepted", 
                                  errand_count: _.size(this.state.accepted_errands), 
                                  parentCallback: this.processErrandTileClick})
                    )
                  ), 
                  React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-xs-5 thumbnail completed-errand-tile"}, 
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
    } else if (this.state.displayState === "displayAddErrandForm") {
      return  React.createElement("div", {className: "section-add-errand-form"}, 
                React.createElement(AddErrandForm, {webServerBase: this.props.webServerBase, 
                               parentCallback: this.processChildAddErrandFormCallback})
              );
    } else if (this.state.displayState === "displayPosted") {
      return  React.createElement("div", {className: "section-posted-errands"}, 
                React.createElement("div", {className: "dashheader"}, 
                  React.createElement("h1", null, "Posted Errands")
                ), 
                React.createElement("div", {className: "dashmain"}, 
                  posted_errand_tags
                ), 
                React.createElement("div", {className: "dashfooter"}
                )
              );
      //END return 'displayPosted'
    } else if (this.state.displayState === "displayAccepted") {
      return  React.createElement("div", {className: "section-accepted-errands"}, 
                React.createElement("div", {className: "dashheader"}, 
                  React.createElement("h1", null, "Accepted Errands")
                ), 
                React.createElement("div", {className: "dashmain"}, 
                  accepted_errand_tags
                ), 
                React.createElement("div", {className: "dashfooter"}
                )
              );
      //END return 'displayAccepted'
     } else if (this.state.displayState === "displayCompleted") {
      return  React.createElement("div", {className: "section-completed-errands"}, 
                React.createElement("div", {className: "dashheader"}, 
                  React.createElement("h1", null, "Completed Errands")
                ), 
                React.createElement("div", {className: "dashmain"}, 
                  completed_errand_tags
                ), 
                React.createElement("div", {className: "dashfooter"}
                )
              );
      //END return 'displayCompleted' 
    } else {
      return  React.createElement("div", null, 
                React.createElement("p", null, "Dashboard_Page entered unsupported state ", this.state.displayState)
              );
      //END return 'Unsupported State'
    }

  }
});
