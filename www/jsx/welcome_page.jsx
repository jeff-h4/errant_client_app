//INPUT PROPS
//webServerBase - Base URL of web server
var WelcomePage = React.createClass({
  render: function() {
    var windowHeight  = $(window).outerHeight();
    var windowWidth   = $(window).outerWidth();
    var styles = {backgroundColor: "lightblue",
                  width:  windowWidth,
                  height: windowHeight};
    return <div style={styles}>
              Welcome to Errant
              <WelcomeSignInForm webServerBase={this.props.webServerBase}/>
           </div>;
  }
});
