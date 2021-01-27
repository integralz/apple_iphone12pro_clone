const iphone_5g_av = document.querySelector(".iphone_5g_av");
const iphone_5g_av_video = document.querySelector(".iphone_5g_video");
const for_iphone_5g_av_text_start = document.querySelector(".for_iphone_5g_av_text_start");
const iphone_5g_av_text3 = document.querySelector(".iphone_5g_text");
const iphone_5g_av_button = document.querySelector(".iphone_5g_button");
const iphone_5g_av_controller = new ScrollMagic.Controller();
const iphone_5g_av_text = TweenMax.fromTo(iphone_5g_av_text3, 3, {opacity: 0}, {opacity:1});

const iphone_5g_av_scene = new ScrollMagic.Scene({
    duration: "90%",
    triggerElement: iphone_5g_av,
    triggerHook: 0
})
.setPin(iphone_5g_av)
.addTo(iphone_5g_av_controller)
.addIndicators({
    name: "1"
});

const iphone_5g_av_scene1 = new ScrollMagic.Scene({
    duration: "80%",
    triggerElement: for_iphone_5g_av_text_start,
    triggerHook: 0

})
.setTween(iphone_5g_av_text)
.addTo(iphone_5g_av_controller)
.addIndicators({
    name:"2"
});

let iphone_5g_av_accelamount = 0.8; 
let iphone_5g_av_delay = 0;

iphone_5g_av_scene.on("update", e =>{
    if(e.scrollPos > e.startPos){
        iphone_5g_av_delay = (e.scrollPos - e.startPos) / 200 * iphone_5g_av_accelamount;
    }
    else{
        iphone_5g_av_delay = 0;
    }
});