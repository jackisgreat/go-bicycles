// JavaScript Document
$(document).ready(function() {
console.log('JS file loaded');

    
// drop down shop menu    
$('.nav-landing').hover(
  function () {
    $('#drop-down').show();
  }, 
    
    $(document).on('mouseleave', '#drop-down', function () {
    $('#drop-down').hide();
})
  
  
);

});

// header shrink on scroll

$(function(){
  $('#header').data('size','big');
});

$(window).scroll(function(){
  if($(document).scrollTop() > 0)
{
    if($('#header').data('size') == 'big')
    {
        $('#header').data('size','small');
        $('#header').stop().animate({
            height:'60px'
        },200);
    }
}
else
  {
    if($('#header').data('size') == 'small')
      {
        $('#header').data('size','big');
        $('#header').stop().animate({
            height:'120px'
        },200);
      }  
  }
});