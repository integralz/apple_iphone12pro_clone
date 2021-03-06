const device_side = document.querySelector(".device_side");
const device_side_video = document.querySelector(".device_side_video");
const device_side_text1 = document.querySelector(".device_side_text1");
const device_side_text2 = document.querySelector(".device_side_text2");
const device_side_controller = new ScrollMagic.Controller();
const device_side_text_sum = new TimelineMax()
.fromTo(device_side_text1, 3, {opacity: 0}, {opacity:1})
.fromTo(device_side_text2, 3, {opacity: 0}, {opacity:1});

const device_side_scene = new ScrollMagic.Scene({
    duration: "90%",
    triggerElement: device_side,
    triggerHook: 0.1
})
.setPin(device_side)
.addTo(device_side_controller);

const device_side_text_scene1 = new ScrollMagic.Scene({
    duration: "70%",
    triggerElement: device_side,
    triggerHook: 0.1

})
.setTween(device_side_text_sum)
.addTo(device_side_controller);

let device_side_accelamount = 0.8; 
let device_side_delay = 0;

device_side_scene.on("update", e =>{
    if(e.scrollPos > e.startPos){
        device_side_delay = (e.scrollPos - e.startPos) / 200 * device_side_accelamount;
    }
    else{
        device_side_delay = 0;
    }
});
