$(document).ready(function(){

  $('header').mousemove(function(e){
    var x = -(e.pageX + this.offsetLeft) / 100;
    var y = -(e.pageY + this.offsetTop) / 100;

    var a = (e.pageX + this.offsetLeft) / 100;
    var b = (e.pageY + this.offsetTop) / 100;

    $('.line-triangle').css(
      {"top": y + 'px',
      "left": x + 'px'}
    );

    $('.color-triangle').css(
      {"top": b + 'px',
      "left": a + 'px'}
    );
  });
});
