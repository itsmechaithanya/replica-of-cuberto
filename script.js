Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr",  {videos:["./1.mp4","./2.mp4","./3.mp4"]});



gsap.to(".felem",{
    scrollTrigger:{
        trigger:"#fimgs",
        pin:true,
        start:"top top",
        end:"bottom bottom",
        endTrigger:".last",
        scrub:1
    },
    y:"-300%",
    ease:Power1
})

let sections = document.querySelectorAll(".felem");
Shery.imageEffect(".images", 
{
    style: 3,
    config:{onMouse:{value:1}},
    // debug:true,
    slideStyle: (setScroll) => {
      sections.forEach(function(section,index) {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY / innerHeight);
          });
        ScrollTrigger.create({
            trigger:section,
            start:"top top",
            end:"bottom bottom",
            scrub:1,
            onUpdate:function(prog){
                // console.log(index)
                setScroll(prog.progress+index)
            },
        });
      });
    },
}
);






