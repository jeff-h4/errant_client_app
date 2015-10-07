//DESCRIPTION:
//This displays buttons for the available actions for a specific errand
//INPUT PROPS
// this.props.errandState = ['posted','accepted','completed','cancelled']
// this.props.parentCallback(action)
var ErrandActionButtons = React.createClass({
  acceptErrand: function() {
    this.props.parentCallback("accepted");
  },
  render: function() {
    if (this.props.errandState === "posted") {
      return  <div>
                <button type="button" className="btn btn-info" onClick={this.acceptErrand}>Accept</button>
              </div>;
    } else {
      return  <div>
                <p>State {this.props.errandState} is not supported by ErrandActionButtons</p>
              </div>;
    }
  }
});
