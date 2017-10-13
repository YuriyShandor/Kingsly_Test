$(document).ready(function(){

  $('header').mousemove(function(e){
    var x = -(e.pageX + this.offsetLeft) / 130;
    var y = -(e.pageY + this.offsetTop) / 130;

    var a = (e.pageX + this.offsetLeft) / 130;
    var b = (e.pageY + this.offsetTop) / 130;

    $('.line-triangle__block').css('background-position', x + 'px ' + y + 'px');

    $('.color-triangle__block').css('background-position', a + 'px ' + b + 'px');
  });
});
