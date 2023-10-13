//参考: https://nnc-studio.jp/plugin/2022/01/12/js-photoswipe/
photoswipeSimplify.init();

//順番に表示
$(".pics_list img").each(function(index,element){
  setTimeout(function(){ 
    $(element).fadeIn();
  },index*200)
})