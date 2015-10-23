/*

function startFunc(){
  getMenuLinks();


  $("#menuField").click(function(){
    getMenuLinks("select");
    $("#addMenuLink").modal('show');
  })


  //Submit menulink choice
  $("#addLink form").submit(function(){
    

    var parent = $('.menuSelect select').find(":selected").data("menuItem");
    var title = $('.addToMenu #menu_title').val();
    var url = $('#addLink #page_url').val();  
    console.log(parent);  
    this.reset(); 
    return false;
    $(#addLink).modal('hide');
    
  })


//Submit function for adminform & creating object adminFormData
  $("#admin-form form").submit(function() {    
    var adminFormData = {
      ":title" : $(this).find("#page_title").val(),
      ":body" : $(this).find("#page_body").val()     
    };    
    console.log("adminFormData: ", adminFormData);  

  if ($('.addToMenu #menu_title').val().length > 0){
    console.log("#menu_title är större än noll");
    /*
    adminFormData.menuData = {};
    adminFormData.menuData["parent"] = $('.menuSelect select').find(":selected").data("menuItem");
    //get menu link title
    adminFormData.menuData["title"] = $('.addToMenu #menu_title').val();
    //get menu link order
    adminFormData.menuData["url"] = $('#addLink #page_url').val();


  }
    //send object to Ajax function
    savePage(adminFormData);  
    //reset textfields
    this.reset(); 
    
    return false;
  });
  


  


      
  }   
  //End startFunc """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
*/