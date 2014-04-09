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
});