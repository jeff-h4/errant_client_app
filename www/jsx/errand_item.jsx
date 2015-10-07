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
      return  <div className="errand-element">
                <a href="#" onClick={this.toggleDisplayState}>
                  <div>
                    <p>Errand {this.props.id}</p>
                    <p>{this.props.owner} | {this.props.runner} | {this.props.title}</p>
                    <p>{this.props.stores} | ${this.props.price}</p>
                  </div>
                </a>
              </div>;
    } else {
      return  <div className="errand-element-active">
                <a href="#" onClick={this.toggleDisplayState}>
                  <div>
                    <p>Errand {this.props.id}: {this.props.title}</p>
                    <p>Status: {this.props.aasm_state}</p>
                    <p>Owner: {this.props.owner}</p>
                    <p>Runner: {this.props.runner}</p>
                    <p>${this.props.price}</p>
                    <p>{this.props.store}</p>
                    <ErrandActionButtons errandState={this.props.aasm_state} parentCallback={this.execAction}/>
                  </div>
                </a>
              </div>;
 
    }
  }
});
