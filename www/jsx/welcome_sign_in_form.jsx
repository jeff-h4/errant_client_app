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
      }
    });
  },
  render: function() {
    var myHeight  = "50%";
    var myWidth   = "50%";
    var styles = {backgroundColor: "gray",
                  width:  myHeight,
                  height: myWidth};
    return <div style={styles}>
              <form onSubmit={this.submitButtonClicked}>
                <label for="email">Email:</label>
                <input type="text" name="email" />
                <label for="password">Password:</label>
                <input type="password" name="password" />
                <input type="submit" name="Sign In"/>
              </form> 
           </div>;
  }
});
