const lidar_intro = document.querySelector(".lidar_intro");
const lidar_video = document.querySelector(".lidar_video");
const lidar_text = document.querySelector(".lidar_text");
const lidar_block = document.querySelector(".lidar_block");
const cpu_better = document.querySelector(".cpu_better");

const lidar_controller = new ScrollMagic.Controller();
const lidar_text1 = TweenMax.fromTo(lidar_intro, 3, {opacity: 0}, {opacity:1});
const lidar_text2 = TweenMax.fromTo(lidar_text, 3, {opacity: 0}, {opacity:1});

const lidar_scene = new ScrollMagic.Scene({
    duration: "90%",
    triggerElement: lidar_video,
    triggerHook: 0.1
})
.setPin(lidar_video)
.addTo(lidar_controller)
.addIndicators({
    name: "1"
});

const lidar_scene1 = new ScrollMagic.Scene({
    duration: "40%",
    triggerElement: cpu_better,
    triggerHook: 0

})
.setTween(lidar_text1)
.addTo(lidar_controller)
.addIndicators({
    name:"2"
});

const lidar_scene2 = new ScrollMagic.Scene({
    duration: "10%",
    triggerElement: lidar_block,
    triggerHook: 0.1

})
.setTween(lidar_text2)
.addTo(lidar_controller)
.addIndicators({
    name:"2"
});

let lidar_accelamount = 1.2; 
let lidar_delay = 0;

lidar_scene.on("update", e =>{
    if(e.scrollPos > e.startPos){
        lidar_delay = (e.scrollPos - e.startPos) / 200 * lidar_accelamount;
    }
    else{
        lidar_delay = 0;
    }
});