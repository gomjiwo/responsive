$(document).ready(function(){

  $(".mo_view").css({"right":"-50%"});
  $(".close").hide();

  $(".mo_menu_btn").click(function(){
    $(".mo_view").stop(true,true).animate({"right":"0%"});
    $(".close").show();
    $(".mo_menu_btn").hide();
  });

  $(".close").click(function(){
    $(".mo_view").stop(true,true).animate({"right":"-50%"});
    $(".close").hide();
    $(".mo_menu_btn").show();
  });

});


