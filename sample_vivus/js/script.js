$(function(){
  //https://www.evoworx.co.jp/blog/animating-svg-with-vivus-js/  
  new Vivus('flower', {
    duration: 400,
    type: 'delayed',//oneByOne
  }, function() {
    $(".back").addClass("fin")
  });

});