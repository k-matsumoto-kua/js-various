$(function(){
  let title=$("#title")[0]

  
  $(".header_button").on("click",function(){
    $("body").toggleClass("menu_open")
  })

  //参考:https://codeyu.jp/blog/splide2
  new Splide(".splide", {
    type: "loop", // ループあり
    arrows: false, // 矢印非表示
    pagination: false, // ページネーション非表示
    fixedWidth: "400px", // スライドのwidth200px
    gap: "20px", // スライド間の余白20px
  }).mount( window.splide.Extensions );


  function txtSplit(el){//https://sinciate.co.jp/media/2999/
    var content = el.textContent;
    var text = content.trim();
    var newHtml = "";

    text.split("").forEach(function(v) {
        newHtml += "<span>" + v + "</span>";
    });
    el.innerHTML = newHtml;
  }

  txtSplit(title)

  //https://ics.media/entry/220822/
  gsap.from(title.querySelectorAll('span'), {
    y: -30,
    x: -200,
    autoAlpha: 0,
    duration: 1,
    ease: "power4.out",
    stagger: -0.1, // 0.1秒ごとに出現
  });

});