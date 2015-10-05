//DESCRIPTION:
//This component displays a single errand
//This is part of a table.
//TODO: Currently focused on Posted Errands. Make it more general
//INPUT PROPS
// this.props.webServerBase - Base URL of the webserver
var ErrandList = React.createClass({
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
    //I want to make it so that when it's clicked, call a function. Maybe I do this in the dashboard?
    return  <div style={styles}>
              <td>{this.props.title}</td>
              <td>{this.props.owner}</td>
              <td>{this.props.runner}</td>
            </div>;
  }
});
