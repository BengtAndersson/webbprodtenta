

function startFunc(){
  getMenuLinks();
  
  //Infoga ny sida, öppna modal
  $(".openModal").on("click", function(){        
    //Call function to send Ajax-call to get menulinks
    //getMenuLinks();      
  });

  // Add menulink & positioning
  $("#menuField").mouseover(function(){
    $("#menuField").css('cursor', 'pointer');
  })

  $("#menuField").click(function(){
    getMenuLinks("select");
    $("#addMenuLink").modal('show');
  })


//Submit function for adminform & creating object adminFormData
  $("#admin-form form").submit(function() {    
    var adminFormData = {
      ":title" : $(this).find("#page_title").val(),
      ":body" : $(this).find("#page_body").val()     
    };    
    console.log("adminFormData: ", adminFormData);  
    //send object to Ajax function
    savePage(adminFormData);  
    //reset textfields
    this.reset(); 
    
    return false;
  });


  var field = $()
  //Adds menu link and name
  $("#addMenuLink form").submit(function() {   
    alert(x);
    //$("#menuField").append("<ul><li><a href="#">hejhej</a></li></ul>");
    
    this.reset(); 
    
    return false;
  });




 /* 

//Showing menuChoice fields
  $(".showMenu").on("click", function(){      
      $(".menu_display").fadeToggle(500);  

      //Add menulinks  
  if($("menu_field").focus()){
    alert("tjo!!");
  }
  });

  
*/


      
  }   
  //End startFunc """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
  