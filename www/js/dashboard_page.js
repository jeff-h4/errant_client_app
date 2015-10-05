//INPUT PROPS 
//webServerBase - Base URL of web server
var DashboardPage = React.createClass({displayName: "DashboardPage",
  getInitialState: function() {
    return {
      posted_errands: {},
      accepted_errands:  {}
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
  render: function() {
    var windowHeight  = $(window).outerHeight();
    var windowWidth   = $(window).outerWidth();
    var styles = {backgroundColor: "lightgreen",
                  width:  windowWidth,
                  height: windowHeight};
    //var postedErrandTile = function() {
    //  this.state.posted_errands.map(function(p) {
    //    return <div className=""></div>;
    //  });
    //};
    //var acceptedErrandTile = function() {
    //};

    return  React.createElement("div", {className: "container", style: styles}, 
              React.createElement("div", {className: "dashheader"}, 
                "Errant Dashboard"
              ), 
              React.createElement("div", {className: "dashmain"}, 
                React.createElement("div", {className: "thumbnail posted-errand-tile"}, 
                  "Posted (", _.size(this.state.posted_errands), ")"
                ), 
                React.createElement("div", {className: "thumbnail accepted-errand-tile"}, 
                  "Accepted (", _.size(this.state.accepted_errands), ")"
                )
              ), 
              React.createElement("div", {className: "dashfooter"}
              )
            );
  }
});
