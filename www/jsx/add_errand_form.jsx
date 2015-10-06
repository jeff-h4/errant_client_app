//DESCRIPTION:
//This displays the Add Errand form
//INPUT PROPS
// this.props.parentCallback(some id)
var AddErrandForm = React.createClass({
  submitButtonClicked: function() {
    console.log("AddErrandForm submitButtonClicked(): Entered function");
    //TODO: This isn't actually going to do anything proper. 
    //This will just get alist of errands. I wanna ensure data transfer
    var errandTitle = $("#errand-title").val();
    var errandItem  = $("#errand-item").val();
    var errandPrice  = $("#errand-price").val();
    var errandStore  = $("#errand-store").val();
    console.log("AddErrandForm: Title is" + errandTitle);
    console.log("AddErrandForm: Item is" + errandItem);
    console.log("AddErrandForm: Price is" + errandPrice);
    console.log("AddErrandForm: Store is" + errandStore);
    console.log("AddErrandForm: webServerBase is" + this.props.webServerBase);
    $.ajax({
      method: "POST",
      url: this.props.webServerBase + "/errands.json",
      data: {
        title: errandTitle,
        item_name: errandItem,
        price: errandPrice,
        store: errandStore  
      },
      success: function(data) {
        console.log("AddErrandForm: Got response from my AJAX Post");
        console.log(data);
        if (data.result === "success") {
          console.log("AddErrandForm: POST successful");
          this.props.parentCallback();
        } else {
          console.log("AddErrandForm: POST Failed");
          console.log(data);
        }
      }.bind(this)
    });
    console.log("AddErrandForm submitButtonClicked(): left function");
  },
  render: function() {
  //I want to make it so that when it's clicked, call a function. Maybe I do this in the dashboard?
  return  <div className="row">
           <div className="col-xs-12">
             <form onSubmit={this.submitButtonClicked}>
               <div className="form-group">
                   <label htmlFor="errand-title">Title:</label>
                   <input className="form-control" type="text" id="errand-title" />
               </div>
               <div className="form-group">
                   <label htmlFor="errand-item">Item:</label>
                   <input className="form-control" type="text" id="errand-item" />
               </div>
               <div className="form-group">
                 <label htmlFor="errand-price">Price:</label>
                 <input className="form-control" type="text" id="errand-price" />
               </div>
               <div className="form-group">
                 <label htmlFor="errand-store">Store:</label>
                 <input className="form-control" type="text" id="errand-store" />
               </div>
               <input className="btn btn-primary" type="submit"/>
             </form> 
           </div>
         </div>;
  }
});
