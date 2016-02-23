// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
// require bootstrap.min
// require_tree .












$(document).ready(function() {

  var els = $('#lightgalleryVertical li').length;
  $('#lightgalleryVertical').lightSlider({
    gallery:true,
    item:1,
    vertical:true,
    verticalHeight:360,
    vThumbWidth:100,
    thumbItem:els,
    thumbMargin:4,
    slideMargin:0
  });

  $('.panel').on('hidden.bs.collapse', function (e) {
    var cl = $(this).find('span.closed');
    var op = $(this).find('span.opened');
    cl.addClass('opened');
    cl.removeClass('closed')
    op.removeClass('opened')
    op.addClass('closed');
  });

  $('.panel').on('shown.bs.collapse', function (e) {
    var cl = $(this).find('span.closed');
    var op = $(this).find('span.opened');
    cl.addClass('opened');
    cl.removeClass('closed')
    op.removeClass('opened')
    op.addClass('closed');
  });


  $('#productDetailsViewOptions .nav-tabs li').first().addClass('active');
});

