//INPUT PROPS
//webServerBase - Base URL of web server
var WelcomePage = React.createClass({
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
    return <div className="welcome-page">
            <div className="page-header">
              <h1 className="center-element">Welcome to Errant</h1>
            </div>
            <WelcomeSignInForm webServerBase={this.props.webServerBase}
                                   callback={this.props.pageCallback}/>
            <div className="center-element">
              <img src="img/logo.png" />
            </div>
           </div>;
  }
});
