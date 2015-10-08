//INPUT PROPS
//webServerBase - Base URL of web server
var WelcomePage = React.createClass({
  render: function() {
    return <div className="welcome-page">
            <div className="page-header">
              <h1 className="center-element">Welcome to Errant</h1>
            </div>
            <WelcomeSignInForm webServerBase={this.props.webServerBase}
                                   callback={this.props.pageCallback}/>
           </div>;
  }
});
