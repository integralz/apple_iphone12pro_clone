const cpu_intro = document.querySelector(".cpu_intro");
const iphone_5g_text2 = document.querySelector(".iphone_5g_text2");
const cpu_video = document.querySelector(".cpu_video");
const cpu_more_information = document.querySelector(".cpu_more_information");
const cpu_controller = new ScrollMagic.Controller();
const cpu_text = TweenMax.fromTo(cpu_intro, 3, {opacity: 0}, {opacity:1});
const cpu_text1 = TweenMax.fromTo(cpu_more_information, 3, {opacity: 0}, {opacity:1});

const cpu_scene = new ScrollMagic.Scene({
    duration: "90%",
    triggerElement: cpu_video,
    triggerHook: 0.1
})
.setPin(cpu_video)
.addTo(cpu_controller);

const cpu_scene1 = new ScrollMagic.Scene({
    duration: "80%",
    triggerElement: iphone_5g_text2,
    triggerHook: 0

})
.setTween(cpu_text)
.addTo(cpu_controller);

const cpu_scene2 = new ScrollMagic.Scene({
    duration: "180%",
    triggerElement: cpu_video,
    triggerHook: 0

})
.setTween(cpu_text1)
.addTo(cpu_controller);

let cpu_accelamount = 1.2; 
let cpu_delay = 0;

cpu_scene.on("update", e =>{
    if(e.scrollPos > e.startPos){
        cpu_delay = (e.scrollPos - e.startPos) / 200 * cpu_accelamount;
    }
    else{
        cpu_delay = 0;
    }
});