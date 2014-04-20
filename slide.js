// -------
  // #Instagram Images
// -------

$(function () {

  $( 'body' ).on('click','.thumb-link', function() {
    var src = $(this).find('img').attr('src');
    $('#main-image').attr('src', src);
    
    $('#image-display').show('slow');
    
    $( 'body' ).on('click','#image-display',function() {
      $( "#image-display" ).hide( 1000 );
    }); 
  });

  
  connectAPI();
  
  setInterval(function() {
    connectAPI();
  }, 300000);

  function connectAPI() {
    var url = "https://api.instagram.com/v1/tags/lighthouse/media/recent?client_id=a17b202a68d644619d0f4b7d0c4c498b&callback=?";
    options = {
      dataType: 'jsonp',
      success: loadImages,  
      error: function() {
        alert('error');
      }
    };

    $.ajax(url, options);
  }

  function loadImages(data) {
    $('.clearfix').empty();
    // console.log(data.data.length);
    for(var i=0; i<data.data.length; i++){
      var post = data.data[i]
      var lowResUrl = post.images.low_resolution.url
      $('<li class="thumb-link"><a href="#main-image"><img src="'+lowResUrl+'"/></a></li>').appendTo($('.clearfix'));
    
    }
  }
});

