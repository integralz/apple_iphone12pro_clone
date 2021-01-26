const device_size = document.querySelector(".device_size");
const device_size_video = document.querySelector(".device_size_video");
const device_size_text = document.querySelector(".device_size_text");
const device_size_controller = new ScrollMagic.Controller();
const device_size_text1 = new TimelineMax()
.fromTo(device_size_text, 3, {opacity: 1}, {opacity:0})
.fromTo(device_size_text, 3, {opacity: 0}, {opacity:1});

const device_size_scene = new ScrollMagic.Scene({
    duration: "90%",
    triggerElement: device_size,
    triggerHook: 0.1
})
.setPin(device_size)
.addTo(device_size_controller)
.addIndicators({
    name: "1"
});

const device_size_text_scene1 = new ScrollMagic.Scene({
    duration: "90%",
    triggerElement: device_size,
    triggerHook: 0.1
})
.setTween(device_size_text1)
.addTo(device_size_controller)
.addIndicators({
    name:"1"
});

let device_size_accelamount = 1.6; 
let device_size_delay = 0;

device_size_scene.on("update", e =>{
    if(e.scrollPos > e.startPos){
        device_size_delay = (e.scrollPos - e.startPos) / 200 * device_size_accelamount;
    }
    else{
        device_size_delay = 0;
    }
    if(e.scrollPos < (0.5 * e.startPos + 0.5 * e.endPos)){
        device_size_text.innerHTML = "두가지 크기, <br> Pro와 Pro Max";
    } 
    else{
        device_size_text.innerHTML = "그리고,<br> 다양한 색상";
    } 
});
