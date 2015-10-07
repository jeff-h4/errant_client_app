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
var ErrandItem = React.createClass({displayName: "ErrandItem",
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
      return  React.createElement("div", {className: "errand-element"}, 
                React.createElement("a", {href: "#", onClick: this.toggleDisplayState}, 
                  React.createElement("div", null, 
                    React.createElement("p", null, "Errand ", this.props.id), 
                    React.createElement("p", null, this.props.owner, " | ", this.props.runner, " | ", this.props.title), 
                    React.createElement("p", null, this.props.stores, " | $", this.props.price)
                  )
                )
              );
    } else {
      return  React.createElement("div", {className: "errand-element-active"}, 
                React.createElement("a", {href: "#", onClick: this.toggleDisplayState}, 
                  React.createElement("div", null, 
                    React.createElement("p", null, "Errand ", this.props.id, ": ", this.props.title), 
                    React.createElement("p", null, "Status: ", this.props.aasm_state), 
                    React.createElement("p", null, "Owner: ", this.props.owner), 
                    React.createElement("p", null, "Runner: ", this.props.runner), 
                    React.createElement("p", null, "$", this.props.price), 
                    React.createElement("p", null, this.props.store), 
                    React.createElement(ErrandActionButtons, {errandState: this.props.aasm_state, parentCallback: this.execAction})
                  )
                )
              );
 
    }
  }
});
