
//This function is called after DOM-ready in main.js
function startFunc(){


  $(".addToMenu .menu_display").hide();

/*Submit function for adminform & creating object adminFormData*/
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



  // Test av dubbelklickÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ

  $("#page_body").dblclick(function(){
    alert("Fy för sören det funkar ju!")
  })

//Showing menuChoice fields
  $(".showMenu").on("click", function(){      
      $(".menu_display").fadeToggle(500);  

      //Add menulinks  
  if($("menu_field").focus()){
    alert("tjo!!");
  }
  });

  



      
  }   
  //End startFunc """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
  




/*
  $("#menu_field").on("dblclick" function(){
    $("menu_field").append("<textarea id="menu_block" placeholder="Menynamn" required></textarea>")

  })
*/






//Add menu links function
function addmenulinks(){



}