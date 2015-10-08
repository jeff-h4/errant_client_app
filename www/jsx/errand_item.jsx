//DESCRIPTION:
//This displays the details of a single element item
//INPUT PROPS
// this.props.id
// this.props.owner
// this.props.runner
// this.props.title
// this.props.price
// this.props.store
// this.props.parentCallback(some id)
// States
// - displayBrief, displayAll
var ErrandItem = React.createClass({
    //processClick: function(){
    //  console.log("ErrandTile " + this.props.tile_title + " got clicked");
    //  this.props.parentCallback(this.props.tile_title);
    //},
    getInitialState: function() {
      return {
        interactionState: "displayBrief"
      };
    },
    toggleDisplayState: function() {
      if (this.state.interactionState === "displayBrief") {
        this.setState({interactionState: "displayAll"});
      } else {
        this.setState({interactionState: "displayBrief"});
      }
    },
    execAction: function(action) {
      console.log("Errand said to do " + action);
      $.ajax({
        method: "PATCH",
        url: this.props.webServerBase + "/errands/ " + this.props.id,
        data: {errand: {aasm_state: action}},
        success: function() {
          console.log("ErrandItem execAction: Updated state to " + action);
        },
        error: function() {
          console.log("ErrandItem execAction: There was an error performing " + action);
        }
      });
    },
    render: function() {
    if (this.state.interactionState === "displayBrief") {
      return  <div className="errand-element panel-body">
                <a href="#" onClick={this.toggleDisplayState}>
                    <table>
                      <tr>
                        <td rowSpan="2"><img src="img/cat.png" className="errand-user-profile-img" /></td>
                        <td colSpan="2">{this.props.item_name}</td>
                      </tr>
                      <tr>
                        <td>{this.props.store}</td>
                        <td>${this.props.price}</td>
                      </tr>
                    </table>
                </a>
              </div>;
    } else {
      return  <div className="errand-element-active well panel-body">
                <a href="#" onClick={this.toggleDisplayState}>
                  <table>
                    <tr>
                      <td rowSpan="2"><img src="img/cat.png" className="errand-user-profile-img" /></td>
                      <td colSpan="2">{this.props.item_name}</td>
                    </tr>
                    <tr>
                      <td>{this.props.store}</td>
                      <td>${this.props.price}</td>
                    </tr>
                    <tr>
                      <td>Owner: {this.props.owner}</td>
                      <td>Runner: {this.props.runner}</td>
                    </tr>
                  </table>
                </a>
                <ErrandActionButtons errandState={this.props.aasm_state} parentCallback={this.execAction}/>
              </div>;
 
    }
  }
});
