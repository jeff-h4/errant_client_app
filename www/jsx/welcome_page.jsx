//INPUT PROPS
//webServerBase - Base URL of web server
var WelcomePage = React.createClass({
  render: function() {
    return <div className="welcome-page">
              <h1 className="center-element">Welcome to Errant</h1>
              <WelcomeSignInForm webServerBase={this.props.webServerBase}
                                   callback={this.props.pageCallback}/>
           </div>;
  }
});
