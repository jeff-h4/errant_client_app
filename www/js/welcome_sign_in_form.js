//INPUT PROPS
// this.props.webServerBase - Base URL of the webserver
var WelcomeSignInForm = React.createClass({displayName: "WelcomeSignInForm",
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
    var myHeight  = "50%";
    var myWidth   = "50%";
    var styles = {backgroundColor: "gray",
                  width:  myHeight,
                  height: myWidth};
    return React.createElement("div", {style: styles}, 
              React.createElement("form", {className: "form-control", onSubmit: this.submitButtonClicked}, 
                React.createElement("div", {className: "form-group"}, 
                    React.createElement("label", {htmlFor: "email"}, "Email:"), 
                    React.createElement("input", {type: "text", name: "email"})
                ), 
                React.createElement("div", {className: "form-group"}, 
                  React.createElement("label", {htmlFor: "password"}, "Password:"), 
                  React.createElement("input", {type: "password", name: "password"})
                ), 
                React.createElement("div", {className: "form-group"}, 
                  React.createElement("input", {className: "btn btn-primary", type: "submit", name: "Sign In"})
                )
              )
           );
  }
});
