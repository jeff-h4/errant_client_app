//INPUT PROPS 
//webServerBase - Base URL of web server
var ErrandSummary = React.createClass({
  render: function() {
    return <div className="section-summary">
             <div className="dash-header">
               <h1>Errant Dashboard</h1>
             </div>
             <div className="dash-content">
               <div className="row">
                 <button type="button" className="btn btn-info" onClick={this.processLocalNewErrandClick}>+ New Errand</button>
               </div>
               <div className="row">
                 <div className="col-xs-5 col-xs-offset-1 thumbnail posted-errand-tile">
                   <ErrandTile tile_title="Posted" 
                               errand_count={_.size(this.state.posted_errands)}
                               parentCallback={this.processErrandTileClick}/>
                 </div>
                 <div className="col-xs-5 thumbnail accepted-errand-tile">
                   <ErrandTile tile_title="Accepted" 
                               errand_count={_.size(this.state.accepted_errands)}
                               parentCallback={this.processErrandTileClick}/>
                 </div>
               </div>
               <div className="row">
                 <div className="col-xs-5 thumbnail completed-errand-tile">
                   <ErrandTile tile_title="Completed" 
                               errand_count={_.size(this.state.completed_errands)}
                               parentCallback={this.processErrandTileClick}/>
                 </div>
               </div>
             </div>
             <div className="dash-footer">
             </div>
           </div>;
      //END return 'summary'
  }
});
