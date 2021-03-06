const magsafe_intro = document.querySelector(".magsafe_intro");
const magsafe_video = document.querySelector(".magsafe_video");
const camera_spec1 = document.querySelector(".camera_spec1");

const magsafe_controller = new ScrollMagic.Controller();
const magsafe_text1 = TweenMax.fromTo(magsafe_intro, 3, {opacity: 0}, {opacity:1});

const magsafe_scene = new ScrollMagic.Scene({
    duration: "90%",
    triggerElement: magsafe_video,
    triggerHook: 0.1
})
.setPin(magsafe_video)
.addTo(magsafe_controller);

const magsafe_scene1 = new ScrollMagic.Scene({
    duration: "40%",
    triggerElement: camera_spec1,
    triggerHook: 0

})
.setTween(magsafe_text1)
.addTo(magsafe_controller);

let magsafe_accelamount = 1.5; 
let magsafe_delay = 0;

magsafe_scene.on("update", e =>{
    if(e.scrollPos > e.startPos){
        magsafe_delay = (e.scrollPos - e.startPos) / 200 * magsafe_accelamount;
    }
    else{
        magsafe_delay = 0;
    }
});