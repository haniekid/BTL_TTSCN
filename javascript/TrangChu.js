/**
 * slide show
 */
let isToggle = false;
function update() {
  window.requestAnimationFrame(update);
  let carousel_inner = document.querySelector(".carousel-inner");
  let height_slide = document.querySelectorAll(".slide")[1].offsetHeight;
  carousel_inner.style.height = height_slide + "px";
  /**
   * Đoạn comment dưới chỉ để thay đổi mài sắc của header
   */
  // let nav = document.getElementById("header");
  // if (window.scrollY > 100 || isToggle) {
  //   nav.style.backgroundColor = "#212529";
  // } else {
  //   nav.style.backgroundColor = "transparent";
  // }
}
update();
// Slide tiếp theo
function slideNext() {
  let lists = document.querySelectorAll(".slide");
  document.getElementById("carousel-inner").appendChild(lists[0]);
}
// SLide trước đó
function slidePrev() {
  let lists = document.querySelectorAll(".slide");
  document.getElementById("carousel-inner").prepend(lists[lists.length - 1]);
}
// Slide tự động chạy
let autoShow = setInterval(slideNext, 3500);
// Button slide
document.getElementById("btn-next").addEventListener("click", () => {
  slideNext();
  // Reset Interval - Nếu mở slide tự động chạy ở trên thì phải bỏ comment của 2 dòng dưới
  clearInterval(autoShow);
  autoShow = setInterval(slideNext, 3500);
});
// Button slide
document.getElementById("btn-prev").addEventListener("click", () => {
  slidePrev();
  // Reset Interval - Nếu mở slide tự động chạy ở trên thì phải bỏ comment của 2 dòng dưới
  clearInterval(autoShow);
  autoShow = setInterval(slideNext, 3500);
});
