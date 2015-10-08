//DESCRIPTION:
//This is a div button
//INPUT PROPS
// this.props.webServerBase - Base URL of the webserver
// this.props.tile_title - Title of the tile
// this.props.errand_count - # of the relevant errand
var ErrandTile = React.createClass({
    processClick: function(){
      console.log("ErrandTile " + this.props.tile_title + " got clicked");
      this.props.parentCallback(this.props.tile_title);
    },
    render: function() {
    //I want to make it so that when it's clicked, call a function. Maybe I do this in the dashboard?
    return  <div> 
              <a href="#" onClick={this.processClick}>
                <div className="tile tile-medium tile-teal">
                  <h4>{this.props.tile_title} <span className="badge">{this.props.errand_count}</span></h4>
                </div>
              </a>
            </div>;
  }
});
