//INPUT PROPS
//webServerBase - Base URL of web server
var DashboardPage = React.createClass({
  render: function() {
    var windowHeight  = $(window).outerHeight();
    var windowWidth   = $(window).outerWidth();
    var styles = {backgroundColor: "orange",
                  width:  windowWidth,
                  height: windowHeight};
    return <div style={styles}>
              Errant Dashboard
           </div>;
  }
});
