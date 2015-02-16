// All ajax calls needed

// Data from form as object adminFormData

function savePage(adminFormData) {
  console.log("Du har kommit till Ajax anropet, function savepage är anropad");
  $.ajax({
    url: "php/saveNewPage.php",
    type: "post",
    dataType: "json",
    data: {
      //this request must have data to get through the 
      //if-statement in save_content.php
      "page_data" : adminFormData
    },
    success: function(data) {

     console.log("successfully inserted form data");
    },
    error: function(data) {
      console.log("insertNewPage error: ", data);
    }
  });
  return false;
}

//Function to get menu links
/*
function getMenuLinks(){

  $.ajax({
    url: "",
    type: "get",
    dataType: "json",
    data: {
      "" :
    },
    success: function(data) {
      console.log("Success getting menuLinks");
    },
    error: function(data) {
      console.log("Error: ", data);
    }
  });
  return false;
}

*/