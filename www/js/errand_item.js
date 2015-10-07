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
var ErrandItem = React.createClass({displayName: "ErrandItem",
    //processClick: function(){
    //  console.log("ErrandTile " + this.props.tile_title + " got clicked");
    //  this.props.parentCallback(this.props.tile_title);
    //},
    render: function() {
    //I want to make it so that when it's clicked, call a function. Maybe I do this in the dashboard?
    return  React.createElement("div", {className: "errand-element"}, 
              React.createElement("p", null, "Errand ", this.props.id), 
              React.createElement("p", null, this.props.owner, " | ", this.props.runner, " | ", this.props.title), 
              React.createElement("p", null, this.props.stores, " | $", this.props.price)
            );
  }
});
