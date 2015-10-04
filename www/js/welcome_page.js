//INPUT PROPS
//webServerBase - Base URL of web server
var WelcomePage = React.createClass({displayName: "WelcomePage",
  render: function() {
    var windowHeight  = $(window).outerHeight();
    var windowWidth   = $(window).outerWidth();
    var styles = {backgroundColor: "lightblue",
                  width:  windowWidth,
                  height: windowHeight};
    return React.createElement("div", {style: styles}, 
              "Welcome to Errant", 
              React.createElement(WelcomeSignInForm, {webServerBase: this.props.webServerBase})
           );
  }
});
