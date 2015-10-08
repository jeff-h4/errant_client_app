//INPUT PROPS
// this.props.webServerBase - Base URL of the webserver
var WelcomeSignInForm = React.createClass({
  submitButtonClicked: function() {
    //TODO: This isn't actually going to do anything proper. 
    //This will just get alist of errands. I wanna ensure data transfer
    var userEmail = $("#signin-email").val();
    var userPassword = $("#signin-password").val();
    console.log("WelcomeSignInForm: Email is" + userEmail);
    console.log("WelcomeSignInForm: Password is" + userPassword);
    console.log("WelcomeSignInForm: webServerBase is" + this.props.webServerBase);
    $.ajax({
      method: "POST",
      url: this.props.webServerBase + "/auth.json",
      data: {email: userEmail},
      success: function(data) {
        console.log("I got data!");
        console.log(data);
        if (data.result === "success") {
          console.log("Sign In Successful");
          this.props.callback();
        } else {
          console.log("Sign In Failure");
          console.log(data);
        }
      }.bind(this)
    });
  },
  render: function() {
    return  <div className="row welcome-signin-form center-element">
              <div className="col-xs-12">
                <form onSubmit={this.submitButtonClicked}>
                  <div className="form-group">
                      <label htmlFor="signin-email">Email:</label>
                      <input className="form-control" type="email" id="signin-email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="signin-password">Password:</label>
                    <input className="form-control" type="password" id="signin-password" />
                  </div>
                  <input className="btn btn-lg btn-primary" type="submit"/>
                </form> 
              </div>
            </div>;
  }
});
