/**
 * Thay đổi giao diện
 */
function update(){
    window.requestAnimationFrame(update);
    let carousel_inner = document.querySelector(".carousel-inner");
    let height_slide = document.querySelectorAll(".slide")[1].offsetHeight;
    carousel_inner.style.height = height_slide + "px";
    let nav = document.getElementById("navbar");
    if(window.scrollY > 100){
        nav.style.backgroundColor = "#212529";
    }else{
        nav.style.backgroundColor = "transparent";
    }
}
update();

/**
 * slide show
 */
// Slide tiếp theo
function slideNext(){
    let lists = document.querySelectorAll(".slide"); 
    document.getElementById("carousel-inner").appendChild(lists[0]);
}
// SLide trước đó
function slidePrev(){
    let lists = document.querySelectorAll(".slide"); 
    document.getElementById("carousel-inner").prepend(lists[lists.length - 1]);
}
// Slide tự động chạy
let autoShow = setInterval(slideNext, 3500);
// Button slide
document.getElementById("btn-next").addEventListener("click", () => {
    slideNext();
    // Reset Interval
    clearInterval(autoShow);
    autoShow = setInterval(slideNext, 3500);
});
// Button slide
document.getElementById("btn-prev").addEventListener("click", () => {
    slidePrev();
    // Reset Interval
    clearInterval(autoShow);
    autoShow = setInterval(slideNext, 3500);
});
