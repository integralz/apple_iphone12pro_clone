const inform_start = document.querySelector(".inform_start");
const inform_start_controller = new ScrollMagic.Controller();
const inform_start_text = TweenMax.fromTo(inform_start, 3, {opacity: 1}, {opacity:0});

const inform_start_scene = new ScrollMagic.Scene({
    duration: "90%",
    triggerElement: inform_start,
    triggerHook: 0

})
.setTween(inform_start_text)
.addTo(inform_start_controller);
