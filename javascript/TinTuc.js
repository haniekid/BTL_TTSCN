let limit_port_card = 8;
let post_card = document.querySelectorAll(".category-main-content .post-card");
let count_post_card_page = Math.ceil(post_card.length/limit_port_card);
let thisPage = 1;
function postCardPageDisplay(){
    post_card.forEach((item, index) => {
        if((index < thisPage*limit_port_card) && (index > thisPage*limit_port_card - (limit_port_card + 1))){
            item.style.display = "flex";
        }else{
            item.style.display = "none";
        }
    });
}
function createNav(){
    let ul = document.querySelector(".navigation-nav-post-card .nav-links");
    for(let i = 1; i <= count_post_card_page; i++){
        let li = document.createElement("li");
        li.innerHTML = i;
        ul.appendChild(li);
    }
}
createNav();
let list_li_nav_links = document.querySelectorAll(".nav-links li");
let pre_nav_link =  document.querySelector(".pre-nav-link");
let next_nav_link = document.querySelector(".next-nav-link");
pre_nav_link.addEventListener("click", ()=>{thisPage--});
next_nav_link.addEventListener("click", ()=>{thisPage++});
function changePage(){
    window.requestAnimationFrame(changePage);
    for(let i = 1; i <= count_post_card_page; i++){
        if(i == thisPage){
            list_li_nav_links[i-1].classList.add("active");
        }else{
            list_li_nav_links[i-1].classList.remove("active");
        }
        list_li_nav_links[i-1].addEventListener("click", () => {
            thisPage = i;
        })
        if(thisPage  -i> 1 || i - thisPage > 1){
            list_li_nav_links[i-1].style.display = "none";
        }else{
            list_li_nav_links[i-1].style.display = "block";
        }
        list_li_nav_links[0].style.display = "block";
        list_li_nav_links[count_post_card_page-1].style.display = "block";
        if(thisPage !=1){
            pre_nav_link.style.display = "flex";
        }else{
            pre_nav_link.style.display = "none";
        }
        if(thisPage != count_post_card_page){
            next_nav_link.style.display = "flex";
        }else{
            next_nav_link.style.display = "none";
        }
        if(i == thisPage -1 && i>2){
            list_li_nav_links[i-1].classList.add("left-nav-link");
        }else{
            list_li_nav_links[i-1].classList.remove("left-nav-link");
        }
        if(i == thisPage + 1 && i<count_post_card_page-1){
            list_li_nav_links[i-1].classList.add("right-nav-link");
        }else{
            list_li_nav_links[i-1].classList.remove("right-nav-link");
        }
    }
    postCardPageDisplay();
}
changePage();