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
var ErrandItem = React.createClass({
    //processClick: function(){
    //  console.log("ErrandTile " + this.props.tile_title + " got clicked");
    //  this.props.parentCallback(this.props.tile_title);
    //},
    render: function() {
    //I want to make it so that when it's clicked, call a function. Maybe I do this in the dashboard?
    return  <div className="errand-element">
              <p>Errand {this.props.id}</p>
              <p>{this.props.owner} | {this.props.runner} | {this.props.title}</p>
              <p>{this.props.stores} | ${this.props.price}</p>
            </div>;
  }
});
