
//slider
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};
// end slider 

//cards
const itemsData = [];
const sectionElement = document.getElementById("items")


for (let i = 1; i <= 24; i++) {
    itemsData.push({
        title:`item-${i}`,
        description:`this is ${i} item`,
        img:"img/1.jpg",

    })
}
//--------------------------

const searchParms = new URLSearchParams(window.location.search);
current_page=searchParms.get("page")
console.log(current_page);
if (current_page == null){
    current_page=1
}
itemdis()

//---------------------------
function itemdis() {
    
    let selecteditems = itemsData.slice(0,3)
    
    let selecteditemsHTML = selecteditems.map(
        e => `
        <div class="card" style="width: 18rem;">
        <img src="${e.img}" class="card-img-top" alt="${e.title}">
        <div class="card-body">
          <h5 class="card-title">${e.title}</h5>
          <p class="card-text">${e.description}</p>
        </div>
      </div>
`
    )
    sectionElement.innerHTML = selecteditemsHTML
}
//end cards