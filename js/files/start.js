
//This function is called after DOM-ready in main.js
function startFunc(){


  $(".addToMenu .menuChoice").hide();

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

//Showing menuChoice fields

  $(".showMenu").on("click", function(){      
      $(".addToMenu .menuChoice").fadeToggle(500);  

      if($(".addtoMenu").visible) {
        alert("Jag syns !!")
        $(".menuTitle").attr("required");
      }   
  });






}