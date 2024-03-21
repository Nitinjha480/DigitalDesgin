function locomotive(params) {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  
    // for tablet smooth
    tablet: { smooth: true },
  
    // for mobile
    smartphone: { smooth: true }
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    }
  
    // follwoing line is not required to work pinning on touch screen
  
    /* pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed"*/
  });
  
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  ScrollTrigger.refresh();
}
locomotive();

function ballMove(params) {
  let container = document.querySelector("#header");
  let ball = document.querySelector(".ball");

  function onMouse(params) {
    container.addEventListener("mousemove", (e) => {
      gsap.to(ball, {
        x: e.x,
        y: e.y
      })
    })
  }

  container.addEventListener('mouseenter', (e) => {
    ball.style.display = "flex";
    onMouse();
  })

  container.addEventListener('mouseleave', (e) => {
    ball.style.display = "none";
  })

  onMouse();

}
ballMove();

gsap.from("#header h1 span",{
  opacity:0,
  y:80,
  ease: "none",
  stagger:.1,
  duration:.5, 
})

function upComing(target, triggered) {
  gsap.from(target,{
    opacity:0,
    y:80,
    ease: "none",
    stagger:.12,
    duration:2, 
    scrollTrigger:{
      trigger:triggered,
      scroller: '#main',
      start: 'bottom 47%',
      end: 'bottom 46%',
      scrub: 2
    },
  })
}
upComing(".intro h1 span", "#header")
upComing(".quality h1 span",".work .card")
upComing(".service h1 span",".intro")
upComing(".about h1", ".quality")

gsap.from(".service .card",{
  opacity:0,
  scale:0,
  ease: "none",
  duration:.2, 
  scrollTrigger:{
    trigger:'.intro',
    scroller: '#main',
    start: 'bottom 47%',
    end: 'bottom 46%',
    scrub: 2
  },
})




