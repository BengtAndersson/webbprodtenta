
//This function is called after DOM-ready in main.js
function startFunc(){


  //$(".addToMenu .menu_display").hide();
  //Infoga ny sida, öppna modal
  $(".openModal").on("click", function(){   
     
    //Call function to send Ajax-call to get menulinks
      alert("Nu öppnas den !!")
  });

  // Add menulink & positioning
  $("#menuField").mouseover(function(){
    $("#menuField").css('cursor', 'pointer');
  })

  $("#menuField").dblclick(function(){
    alert("Fy för sören det funkar ju!");
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