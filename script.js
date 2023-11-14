function loco() {
    gsap.registerPlugin(ScrollTrigger);


    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

}
loco();

function videoconAnimation0() {
    var videocon = document.querySelector("#video-container")
    var playbtn = document.querySelector("#play")
    videocon.addEventListener("mouseenter", function () {
        gsap.to(playbtn, {
            opacity: 1,
            scale: 1
        })

    })
    videocon.addEventListener("mouseleave", function () {
        gsap.to(playbtn, {
            opacity: 0,
            scale: 0
        })
    })
    videocon.addEventListener("mousemove", function (dets) {
        gsap.to(playbtn, {
            left: dets.x - 70,
            top: dets.y - 80
        })
    })
}
videoconAnimation0();

function loadingAnimation() {
    gsap.from("#page1 h1", {
        y: 100,
        opacity: 0,
        delay: 0.5,
        stagger: 0.2,
        duration: 0.9

    })
    gsap.from("#page1 #video-container", {
        y: 50,
        opacity: 0,
        delay: 1.2,
        duration: 0.9

    })
}
loadingAnimation();

function cur() {
    document.addEventListener("mousemove", function (dets) {
        gsap.to("#cursor", {
            left: dets.x,
            top: dets.y
        })
    })
    var child = document.querySelectorAll(".child")
    child.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.to("#cursor", {
                transform: "translate(-50%,-50%) scale(1.2) "
            })
        })
    })
    child.forEach(function (elem) {
        elem.addEventListener("mouseleave", function () {
            gsap.to("#cursor", {
                transform: "translate(-50%,-50%) scale(0) "
            })
        })
    })

}
cur()

gsap.to(" #nav-pt1 svg", {
    transform: "translateY(-100%)",
    scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        // markers:true,
        start: "top -5%",
        end: "top -10%",
        scrub: true
    }
})



gsap.to("#nav-pt2 #links", {
    transform: "translateY(-100%)",
    opacity: 0,
    scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
    },
});

var icons = document.getElementById("icons");
var logo1 = document.getElementById("logo1");

var condition = 1;
document.getElementById("icons").addEventListener("click", function () {
    if (condition === 1) {
        condition = 2;
        gsap.to("#menu",{
            transform:"translateY(0%)"
        })
        icons.style.backgroundColor = "black"
        icons.style.color = "white"
        logo1.style.color = "white"
    }
    else {
        gsap.to("#menu",{
            transform:"translateY(-100%)"
        })
        icons.style.backgroundColor = "#F7F7F7"
        icons.style.color = "black"
        logo1.style.color = "black"
        condition = 1;



    }
})