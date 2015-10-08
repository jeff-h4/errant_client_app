//DESCRIPTION:
//This displays buttons for the available actions for a specific errand
//INPUT PROPS
// this.props.errandState = ['posted','accepted','completed','cancelled']
// this.props.parentCallback(action)
var ErrandActionButtons = React.createClass({
  acceptErrand: function() {
    this.props.parentCallback("accepted");
  },
  completeErrand: function() {
    this.props.parentCallback("completed");
  },
  render: function() {
    if (this.props.errandState === "posted") {
      return  <div>
                <button type="button" className="btn btn-info" onClick={this.acceptErrand}>Accept</button>
              </div>;
    } else if (this.props.errandState === "accepted") {
      return  <div>
                <button type="button" className="btn btn-info" onClick={this.acceptErrand}>Complete</button>
              </div>;
    } else if (this.props.errandState === "completed") {
      return  <div></div>;
    } else {
      return  <div>
                <p>State {this.props.errandState} is not supported by ErrandActionButtons</p>
              </div>;
    }
  }
});
