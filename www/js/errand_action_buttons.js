//DESCRIPTION:
//This displays buttons for the available actions for a specific errand
//INPUT PROPS
// this.props.errandState = ['posted','accepted','completed','cancelled']
// this.props.parentCallback(action)
var ErrandActionButtons = React.createClass({displayName: "ErrandActionButtons",
  acceptErrand: function() {
    this.props.parentCallback(this.props.buttonId,"accepted");
  },
  completeErrand: function() {
    this.props.parentCallback(this.props.buttonId,"completed");
  },
  processButtonClick: function() {
  },
  render: function() {
    if (this.props.errandState === "posted") {
      return  React.createElement("div", null, 
                React.createElement("button", {type: "button", className: "btn btn-info", onClick: this.acceptErrand}, "Accept")
              );
    } else if (this.props.errandState === "accepted") {
      return  React.createElement("div", null, 
                React.createElement("button", {type: "button", className: "btn btn-success", onClick: this.completeErrand}, "Complete")
              );
    } else if (this.props.errandState === "completed") {
      return  React.createElement("div", null);
    } else {
      return  React.createElement("div", null, 
                React.createElement("p", null, "State ", this.props.errandState, " is not supported by ErrandActionButtons")
              );
    }
  }
});
