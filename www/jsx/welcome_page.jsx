//INPUT PROPS
//webServerBase - Base URL of web server
var WelcomePage = React.createClass({
  render: function() {
    return <div className="welcome-page">
              <div className="row">
                <div className="col-xs-12">
                  Welcome to Errant
                </div>
              </div>
              <div className="row">
                <WelcomeSignInForm webServerBase={this.props.webServerBase}
                                   callback={this.props.pageCallback}/>
              </div>
           </div>;
  }
});
