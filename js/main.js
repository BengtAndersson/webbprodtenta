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
      var page_url =  generateMachineName($("#page_title").val());
      
      var adminFormData = {
        ":title" : $(this).find("#page_title").val(),
        ":body" : $(this).find("#page_body").val(),
        ":path" : page_url
      };

        //if the user has asked to add page to menu
      if ($('.addToMenu input[type="checkbox"]').is(":checked")) {
        //get selected menu parent data
        adminFormData.menuData = {};
        adminFormData.menuData["parent"] = $('.addToMenu select').find(":selected").data("menuItem");
        //get menu link title
        adminFormData.menuData["title"] = $('.addToMenu #menu_title').val();
        //get menu link order
        adminFormData.menuData["weight"] = $('.addToMenu #menu_weight').val();
      }

      savePage(adminFormData);
      console.log("Submit klickat");
      this.reset();
      return false;
    });











//End !
});

