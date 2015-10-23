// All ajax calls needed

// Data from form as object adminFormData
/*
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

function getMenuLinks(whichMenu){

  $.ajax({
    url: "php/getMenus.php",
    type: "get",
    dataType: "json",
    success: function(data) {
      console.log("Success getting menuLinks: ", data);
      if (whichMenu == "select") {
        makeSelect(data);
      } else {
        //get main menu...
        makeMainMenu(data);
      }
    },
    error: function(data) {
      console.log("Error: ", data);
    }
  });
  return false;
}
//kallas i ajax anrop inparametern menuLinksData är samma som (data) 
function makeMainMenu(menuLinksData) {
  var mainMenuHtml = $('<ul class="nav navbar-nav"/>');

  while (menuLinksData.length > 0) {
    var linkObj = menuLinksData[0];
    var plid = linkObj.plid;
    var linkParent = mainMenuHtml.find('li[data-mlid="'+plid+'"]');

    if (plid && linkParent.length === 0) {
      var move = menuLinksData.shift();
      menuLinksData.push( move );

      continue;
    }

    var linkHtml = $('<li data-mlid="'+linkObj.mlid+'"><a href="'+linkObj.path+'">'+linkObj.title+'</a></li>');

    if (!plid) {
      mainMenuHtml.append(linkHtml);
    } else {

      if (linkParent.children("ul").length === 0) {
        //first child will now be added, but first append a dropdown-menu
        linkParent.addClass("dropdown");
        linkParent.append('<ul class="dropdown-menu"/>')
      }

      // same as: mainMenuHtml.find('li[data-mlid="'+plid+'"] > ul').append(linkHtml);
      linkParent.children("ul").append(linkHtml);
    }

    //remove first item using shift, it's done!
    menuLinksData.shift();
  }

  $("header nav .navbar-nav").remove();
  $("header nav").prepend(mainMenuHtml);
}


function makeSelect(menuLinksData) {
  var selectHtml = $('<select class="form-control"/>');
  selectHtml.append('<option value="">Top</option>');

  menuLinksData.forEach(function(link) {
    if (link.plid === null) {
      selectHtml.append('<option value="'+link.mlid+'">'+link.title+'</option>');
    }
  });

  $("#addLink .menuSelect").html(selectHtml);
}

*/