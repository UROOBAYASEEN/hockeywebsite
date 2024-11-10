 
let cursures=document.querySelector("#cursure")

let cursures_blur=document.querySelector("#blue_cursure")
document.addEventListener("mousemove",(e)=>{

    cursures.style.left = e.clientX + "px"; 
    
    cursures.style.top = e.clientY+ "px"; 
    cursures_blur.style.left = e.clientX-150 + "px"; 
    
    cursures_blur.style.top = e.clientY-150 +"px"; 
    




})




gsap.to(".nav",{
 
    backgroundColor:"#000",
duration:0.5 , 

height:"100px ",
scrollTrigger:{
trigger:".nav",
scroller:"body",  
start:"top -10%",
end:"top -11",
scrub:2 


}

})


gsap.to( "#main",{
 
backgroundColor:"#000",
 
scrollTrigger:{
    
    trigger:"#main",
    
     scroller:"body",
     start:"top -25vh",
     end:"top -70vh",
     scrub:2

}

})
