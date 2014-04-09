jQuery(document).ready(function($) {
  $('body').addClass("js");
  if ($(".ads").length > 0) {
    $(".ads").prepend("<div class='ad-header'><a href='#' class='close'>x</a></div>")
    $(".ads .ad-header .close").click(function(){
      $(this).closest(".ads").slideUp("slow", function() {
        $(this).remove();
        return false;
      });
    });
  }
});