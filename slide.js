//test //alert("Hello")
//starting with document.ready func
$(function(){

  $( ".thumb-link" ).click(function() {
  //alert( "Image is clickable" );
    var src = $(this).find('img').attr('src');
    //console.log(src);
    //console.log(typeof(src));

    src = src.replace("thumb","main");
    //src.replace('thumb','main');

    $('#main-image').attr('src',src); 
  });

  $(".thumb-link").hover(function(){
    $(".thumb-link").css("border-color", "yellow")

  });

  $(".thumb-link img").hover(function(){
    $(this).css("border-color" ,"red").css("opacity" ,"0.3");
    },function(){
    $(this).css("border-color","rgba(131, 130, 130, 0.21)").css("opacity","1");
  });

  




});
