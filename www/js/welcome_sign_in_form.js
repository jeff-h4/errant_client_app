//INPUT PROPS
// this.props.webServerBase - Base URL of the webserver
var WelcomeSignInForm = React.createClass({displayName: "WelcomeSignInForm",
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
    return  React.createElement("div", {className: "row welcome-signin-form center-element"}, 
              React.createElement("div", {className: "col-xs-12"}, 
                React.createElement("form", {onSubmit: this.submitButtonClicked}, 
                  React.createElement("div", {className: "form-group"}, 
                      React.createElement("label", {htmlFor: "signin-email"}, "Email:"), 
                      React.createElement("input", {className: "form-control", type: "email", id: "signin-email"})
                  ), 
                  React.createElement("div", {className: "form-group"}, 
                    React.createElement("label", {htmlFor: "signin-password"}, "Password:"), 
                    React.createElement("input", {className: "form-control", type: "password", id: "signin-password"})
                  ), 
                  React.createElement("input", {className: "btn btn-primary", type: "submit"})
                )
              )
            );
  }
});
