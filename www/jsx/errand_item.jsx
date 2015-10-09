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
    var avatar = "img/cat.png";
    if (this.props.owner_first_name === "Jeff") {
      avatar = "img/jeff.jpg";
    } else if (this.props.owner_first_name === "Tam") {
      avatar = "img/tam.jpg";
    } else if (this.props.owner_first_name === "Mehdi") {
      avatar = "img/mehdi.jpg";
    }
    if (this.state.interactionState === "displayBrief") {
      return  <div id={myErrandItemId} className="errand-element panel-body">
                <a href="#" onClick={this.toggleDisplayState}>
                    <table>
                      <tr>
                        <td rowSpan="2"><img src={avatar} className="errand-user-profile-img" /></td>
                        <td colSpan="2"><strong>{this.props.item_name}</strong></td>
                      </tr>
                      <tr>
                        <td>${this.props.price}</td>
                      </tr>
                      <tr>
                        <td>{this.props.owner_first_name}</td>
                        <td coSspan="2">{this.props.store}</td>
                      </tr>
                    </table>
                </a>
              </div>;
    } else {
      return  <div id={myErrandItemId} className="errand-element-active well panel-body">
                <a href="#" onClick={this.toggleDisplayState}>
                    <table>
                      <tr>
                        <td rowSpan="2"><img src={avatar} className="errand-user-profile-img" /></td>
                        <td colSpan="2"><strong>{this.props.item_name}</strong></td>
                      </tr>
                      <tr>
                        <td>${this.props.price}</td>
                      </tr>
                      <tr>
                        <td>{this.props.owner_first_name}</td>
                        <td colSpan="2">{this.props.store}</td>
                      </tr>
                    </table>
                </a>
                <ErrandActionButtons buttonId={this.props.id} errandState={this.props.aasm_state} parentCallback={this.execAction}/>
              </div>;
 
    }
  }
});
