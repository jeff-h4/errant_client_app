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
    execAction: function(errandId,action) {
      console.log("Errand " + errandId + " said to do " + action);
      $.ajax({
        method: "PATCH",
        url: this.props.webServerBase + "/errands/ " + errandId,
        data: {errand: {aasm_state: action}},
        success: function() {
          console.log("ErrandItem execAction: Updated state to " + action);
          $("#errand-item-" + errandId).addClass("hide");
        },
        error: function() {
          console.log("ErrandItem execAction: There was an error performing " + action);
        }
      });
    },
    render: function() {
    var myErrandItemId = "errand-item-" + this.props.id;
    if (this.state.interactionState === "displayBrief") {
      return  React.createElement("div", {id: myErrandItemId, className: "errand-element panel-body"}, 
                React.createElement("a", {href: "#", onClick: this.toggleDisplayState}, 
                    React.createElement("table", null, 
                      React.createElement("tr", null, 
                        React.createElement("td", {rowSpan: "2"}, React.createElement("img", {src: "img/cat.png", className: "errand-user-profile-img"})), 
                        React.createElement("td", {colSpan: "2"}, React.createElement("strong", null, this.props.item_name))
                      ), 
                      React.createElement("tr", null, 
                        React.createElement("td", null, "$", this.props.price)
                      ), 
                      React.createElement("tr", null, 
                        React.createElement("td", null, this.props.owner_first_name), 
                        React.createElement("td", {coSspan: "2"}, this.props.store)
                      )
                    )
                )
              );
    } else {
      return  React.createElement("div", {id: myErrandItemId, className: "errand-element-active well panel-body"}, 
                React.createElement("a", {href: "#", onClick: this.toggleDisplayState}, 
                    React.createElement("table", null, 
                      React.createElement("tr", null, 
                        React.createElement("td", {rowSpan: "2"}, React.createElement("img", {src: "img/cat.png", className: "errand-user-profile-img"})), 
                        React.createElement("td", {colSpan: "2"}, React.createElement("strong", null, this.props.item_name))
                      ), 
                      React.createElement("tr", null, 
                        React.createElement("td", null, "$", this.props.price)
                      ), 
                      React.createElement("tr", null, 
                        React.createElement("td", null, this.props.owner_first_name), 
                        React.createElement("td", {colSpan: "2"}, this.props.store)
                      )
                    )
                ), 
                React.createElement(ErrandActionButtons, {buttonId: this.props.id, errandState: this.props.aasm_state, parentCallback: this.execAction})
              );
 
    }
  }
});
