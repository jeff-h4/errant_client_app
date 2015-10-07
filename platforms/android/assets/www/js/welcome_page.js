//INPUT PROPS
//webServerBase - Base URL of web server
var WelcomePage = React.createClass({displayName: "WelcomePage",
  render: function() {
    return React.createElement("div", {className: "welcome-page"}, 
              React.createElement("h1", {className: "center-element"}, "Welcome to Errant"), 
              React.createElement(WelcomeSignInForm, {webServerBase: this.props.webServerBase, 
                                   callback: this.props.pageCallback})
           );
  }
});
