photoswipeSimplify.init();


$(".pics_list img").each(function(index,element){
  setTimeout(function(){
    
    $(element).fadeIn();
  },index*200)
})