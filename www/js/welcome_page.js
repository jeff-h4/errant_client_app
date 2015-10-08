//INPUT PROPS
//webServerBase - Base URL of web server
var WelcomePage = React.createClass({displayName: "WelcomePage",
  backKeyDown: function() {
    console.log("Welcome Page - Back Button Hit");
    if (confirm("Exit App?")) {
      navigator.app.exitApp();
    } 
  },
  componentDidMount: function() {
    document.addEventListener("backbutton", this.backKeyDown, true);
  },
  componentWillUnmount: function() {
    document.removeEventListener("backbutton", this.backKeyDown, true);
  },
  render: function() {
    return React.createElement("div", {className: "welcome-page"}, 
            React.createElement("div", {className: "page-header"}, 
              React.createElement("h1", {className: "center-element"}, "Welcome to Errant")
            ), 
            React.createElement(WelcomeSignInForm, {webServerBase: this.props.webServerBase, 
                                   callback: this.props.pageCallback}), 
            React.createElement("div", {className: "center-element"}, 
              React.createElement("img", {src: "img/logo.png"})
            )
           );
  }
});
