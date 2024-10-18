//https://ryo-sukeblog.net/gsap-parallax-horizontal-stagger-draggable/

let sections = document.querySelectorAll(".vertical-area");
let scrollContainer = document.querySelector(".vertical-slider__wrap");
let images = gsap.utils.toArray(".js-img");
let heading = gsap.utils.toArray(".heading-wrap h2");


let timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".vertical-slider__wrap",
    end: () => "+=" + scrollContainer.offsetWidth,
    pin: true,
    scrub: true,
  },
});
let scrollTween =timeline.to(".vertical-area", { xPercent: -100 * (sections.length - 1),
  ease: "none" });



//https://sinciate.co.jp/media/2999/
function txtSplit(el){
    var content = el.textContent;
    var text = content.trim();
    var newHtml = "";

    text.split("").forEach(function(v) {
        newHtml += "<span>" + v + "</span>";
    });
    el.innerHTML = newHtml;
}
images.forEach((img, i) => {
    gsap.to(img,{
        scrollTrigger:{
            trigger: img,
            start:'top center',
            end:'bottom center',
            horizontal:true,
            // markers:true,
            scrub:.2,
            containerAnimation:scrollTween,
        },
        x:-250,ease:"none"
    });
});
heading.forEach((h, i) => {
    txtSplit(h);
    if(i === 0){
        gsap.from(h.querySelectorAll('span'),{
            scrollTrigger:{
                trigger: h,
                start:'top 10%',
                // markers:true,
                horizontal:true,
                containerAnimation:scrollTween,
                toggleActions:'play none none reverse'
            },
            stagger:{
                each:0.02,
            },
            y:'30%',autoAlpha:0,ease:Power4.easeIn,duration:.4,
        });
    }else{
        gsap.from(h.querySelectorAll('span'),{
            scrollTrigger:{
                trigger: h,
                start:'10% center',
                // markers:true,
                horizontal:true,
                containerAnimation:scrollTween,
                toggleActions:'play none none reverse'
            },
            stagger:{
                each:0.02,
            },
            y:'50%',autoAlpha:0,ease:Power4.easeIn,duration:.4,
        });
    }
});

