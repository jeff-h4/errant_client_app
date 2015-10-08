//DESCRIPTION:
//This displays the Add Errand form
//INPUT PROPS
// this.props.parentCallback(some id)
var AddErrandForm = React.createClass({displayName: "AddErrandForm",
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
        errand: {title: errandTitle,
                 item_name: errandItem,
                 price: errandPrice,
                 store: errandStore}
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
  return  React.createElement("div", null, 
            React.createElement("div", {className: "page-header"}, 
              React.createElement("h1", null, "Add a New Errand")
            ), 
            React.createElement("div", {className: "row"}, 
              React.createElement("div", {className: "col-xs-12"}, 
                React.createElement("form", {onSubmit: this.submitButtonClicked}, 
                  React.createElement("div", {className: "form-group"}, 
                      React.createElement("label", {htmlFor: "errand-title"}, "Title:"), 
                      React.createElement("input", {className: "form-control", type: "text", id: "errand-title"})
                  ), 
                  React.createElement("div", {className: "form-group"}, 
                      React.createElement("label", {htmlFor: "errand-item"}, "Item:"), 
                      React.createElement("input", {className: "form-control", type: "text", id: "errand-item"})
                  ), 
                  React.createElement("div", {className: "form-group"}, 
                    React.createElement("label", {htmlFor: "errand-price"}, "Price:"), 
                    React.createElement("input", {className: "form-control", type: "text", id: "errand-price"})
                  ), 
                  React.createElement("div", {className: "form-group"}, 
                    React.createElement("label", {htmlFor: "errand-store"}, "Store:"), 
                    React.createElement("input", {className: "form-control", type: "text", id: "errand-store"})
                  ), 
                  React.createElement("input", {className: "btn btn-primary", type: "submit"})
                )
              )
            )
          );
  }
});
