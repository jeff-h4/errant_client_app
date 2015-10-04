//INPUT PROPS
//webServerBase - Base URL of web server
var DashboardPage = React.createClass({displayName: "DashboardPage",
  render: function() {
    var windowHeight  = $(window).outerHeight();
    var windowWidth   = $(window).outerWidth();
    var styles = {backgroundColor: "orange",
                  width:  windowWidth,
                  height: windowHeight};
    return React.createElement("div", {style: styles}, 
              "Errant Dashboard"
           );
  }
});
