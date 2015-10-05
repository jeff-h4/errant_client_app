//INPUT PROPS
// this.props.webServerBase - Base URL of the webserver
var WelcomeSignInForm = React.createClass({
  submitButtonClicked: function() {
    //TODO: This isn't actually going to do anything proper. 
    //This will just get alist of errands. I wanna ensure data transfer
    var userEmail = $("[name='email']").val();
    console.log("WelcomeSignInForm: Email is" + userEmail);
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
    return  <div className="row center-element">
              <div className="col-xs-8">
                <form className="form-control" onSubmit={this.submitButtonClicked}>
                  <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input type="text" name="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" />
                  </div>
                  <div className="form-group">
                    <input className="btn btn-primary" type="submit" name="Sign In"/>
                  </div>
                </form> 
              </div>
            </div>;
  }
});
