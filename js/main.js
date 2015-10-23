$(function() {

  //Initialize the page ***********************************************''
  $(".add_page_form").hide();

  //Open addpage form
  $(".openForm_btn").click(function () {
      $('.add_page_form').toggle('slow');
      $(this).hide();
    });

  //adminForm add menu checkbox clickhandler to show/hide add menu fields
  $(".add_page_form .menuLinkFields").hide();
  $('.addToMenu input[type="checkbox"]').click(function() {
    if ($(this).is(":checked")) {
      $(".add_page_form .menuLinkFields").show('slow');
    } else {
      $(".add_page_form .menuLinkFields").hide('slow');
    }

    //whenever the user clicks add to menu, 
    //make the menu title field required
    $(".addToMenu #menu_title").attr("required", $(this).is(":checked"));
  });

  $("#closeForm").click(function () {
    $(".add_page_form").hide('slow');
    $(".openForm_btn").show('slow');
  });







  //store new page to db
  $("#admin-form").submit(function(){

  var adminFormData = {
    ":title" : $(this).find("#page_title").val(),
    ":body" : $(this).find("#page_body").val()
  };
    
  
  $.ajax({
        url: "php/saveNewPage.php",
        dataType: "json",
        data: {"page_data" : adminFormData
        },
        success: function(data) {
			console.log("insertPage success: ", data);
			//saveUrlAlias();        
        },
        error: function(data) {
          console.log("insertNewPage error: ", data);
        }
      });
    console.log("Submit klickat");
    this.reset();
    return false;


  });






//End !
});

