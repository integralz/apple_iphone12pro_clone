const iphone_5g = document.querySelector(".iphone_5g");
const fast_5g = document.querySelector(".fast_5g");
const hello_5g = document.querySelector(".hello_5g");

const iphone_5g_controller = new ScrollMagic.Controller();

const iphone_5g_hello_text1 = TweenMax.fromTo(fast_5g, 3, {opacity: 0}, {opacity:0.5});
const iphone_5g_hello_text2 = TweenMax.fromTo(hello_5g, 3, {opacity: 0}, {opacity:1});
const iphone_5g_scene1 = new ScrollMagic.Scene({
    duration: "50%",
    triggerElement: device_side_text1,
    triggerHook: 0

})
.setTween(iphone_5g_hello_text1)
.addTo(iphone_5g_controller);

const iphone_5g_scene2 = new ScrollMagic.Scene({
    duration: "50%",
    triggerElement: device_side_text1,
    triggerHook: 0

})
.setTween(iphone_5g_hello_text2)
.addTo(iphone_5g_controller);