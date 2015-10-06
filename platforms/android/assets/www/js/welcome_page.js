//INPUT PROPS
//webServerBase - Base URL of web server
var WelcomePage = React.createClass({displayName: "WelcomePage",
  render: function() {
    return React.createElement("div", {className: "welcome-page"}, 
              React.createElement("div", {className: "row"}, 
                React.createElement("div", {className: "col-xs-12"}, 
                  "Welcome to Errant"
                )
              ), 
              React.createElement("div", {className: "row"}, 
                React.createElement(WelcomeSignInForm, {webServerBase: this.props.webServerBase, 
                                   callback: this.props.pageCallback})
              )
           );
  }
});
