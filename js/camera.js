const camera_information = document.querySelector(".camera_information");
const lidar_tech_text2 = document.querySelector(".lidar_tech_text2");
const camera_video = document.querySelector(".camera_video");
const camera_text = document.querySelector(".camera_text");
const camera_block = document.querySelector(".camera_block");

const camera_controller = new ScrollMagic.Controller();
const camera_text1 = TweenMax.fromTo(camera_information, 3, {opacity: 0}, {opacity:1});
const camera_text2 = TweenMax.fromTo(camera_text, 3, {opacity: 0}, {opacity:1});

const camera_scene = new ScrollMagic.Scene({
    duration: "90%",
    triggerElement: camera_video,
    triggerHook: 0.1
})
.setPin(camera_video)
.addTo(camera_controller)
.addIndicators({
    name: "1"
});

const camera_scene1 = new ScrollMagic.Scene({
    duration: "40%",
    triggerElement: lidar_tech_text2,
    triggerHook: 0

})
.setTween(camera_text1)
.addTo(lidar_controller)
.addIndicators({
    name:"2"
});

const camera_scene2 = new ScrollMagic.Scene({
    duration: "10%",
    triggerElement: camera_block,
    triggerHook: 0.1

})
.setTween(camera_text2)
.addTo(lidar_controller)
.addIndicators({
    name:"2"
});

let camera_accelamount = 2.5; 
let camera_delay = 0;

camera_scene.on("update", e =>{
    if(e.scrollPos > e.startPos){
        camera_delay = (e.scrollPos - e.startPos) / 200 * camera_accelamount;
    }
    else{
        camera_delay = 0;
    }
});