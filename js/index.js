$( ".box" ).each(function() {
  var attr = $(this).attr('url');

  if (typeof attr !== typeof undefined && attr !== false) {
      $(this).css('background', 'url('+attr+')');
    $(this).css('background-position', 'center top');
  }

});
var darken = "linear-gradient(\
      rgba(0, 0, 0, 0.5),\
      rgba(0, 0, 0, 0.5)\
    )"

$(".box").hover(function () {
    var attr = $(this).attr('url');
    $( this ).children(".text").fadeTo(0, 1);
    $( this ).css('background', darken + ', url('+attr+')');
    $(this).css('background-position', 'center top');

                }, function() {
  var attr = $(this).attr('url');
  $( this ).children(".text").fadeTo(240, 0);
  $(this).css('background', 'url('+attr+')');
  $(this).css('background-position', 'center top');

});