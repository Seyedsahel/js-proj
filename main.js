// heroImg
window.onload = function() {
  var image = document.getElementById("heroPic");
  image.classList.add("slide-down");
};

// productCads

const productsData = [{
  id:1,
  img:"images/1.jpg",
  title:"Single cofee",
  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nostrum illo impedit quia error assumenda ex delectus quod, obcaecati iste?",
},
{
  id:2,
  img:"images/2.jpg",
  title:"Pack Coffee",
  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nostrum illo impedit quia error assumenda ex delectus quod, obcaecati iste?",
},
{
  id:3,
  img:"images/3.png",
  title:"Bubble Tea",
  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nostrum illo impedit quia error assumenda ex delectus quod, obcaecati iste?",
},
{
  id:4,
  img:"images/4.png",
  title:"Coffee Mug",
  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nostrum illo impedit quia error assumenda ex delectus quod, obcaecati iste?",
},
{
  id:5,
  img:"images/5.png",
  title:"Coffee",
  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nostrum illo impedit quia error assumenda ex delectus quod, obcaecati iste?",
},
{
  id:6,
  img:"images/6.png",
  title:"Tea",
  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nostrum illo impedit quia error assumenda ex delectus quod, obcaecati iste?",
},
];

const sectionElement = document.getElementById("productCads")

itemdis()

//---------------------------
function itemdis() {
    
    let selecteditems = productsData.slice(0,6)
    
    let selecteditemsHTML = selecteditems.map(
        e => 
        `
        <div class="card" style="width: 24rem; margin: 20px;">
  <img src="${e.img}" Onmouseover="ChangeImage(this)" Onmouseout="RestoreImage()" class="card-img-top" alt="${e.title}">
  <div class="card-body">
    <h5 id="cardTitle" class="card-title">${e.title}</h5>
    <p id="cardDes" class="card-text">${e.description}</p>
    <a href="#" ><button id="cardBtn" class="btn">Add To Card</button></a>
  </div>
</div>
`
    )
    sectionElement.innerHTML = selecteditemsHTML
}

const imgs = document.querySelectorAll(".card-img-top")

function ChangeImage(img) {
  
    img.src = "images/replaceImg.jpg";
    
}

function RestoreImage() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].src = productsData[i].img;
  }
}
// dl mode
const dlbutton = document.getElementById("dlmode")
//false => light / true =>dark
let isClicked = true
dlbutton.onclick = () => {
  if (isClicked){
    const lightback = document.querySelectorAll(".light-back") 
    lightback.forEach((e) => {
      e.classList.remove("light-back")
      e.classList.add("dark-back")
    })
    const lightcolor = document.querySelectorAll(".light-color") 
    lightcolor.forEach((e) => {
      e.classList.remove("light-color")
      e.classList.add("dark-color")
    })
  
    document.querySelector(".home").style.backgroundColor = "#FFBF00"
    
    const btns = document.querySelectorAll("#cardBtn");
    btns.forEach((e) => {
      e.style.backgroundColor = "#FFBF00"
    })
    dlbutton.innerHTML="Light"
    dlbutton.style.backgroundColor = "var(--white)"
    dlbutton.style.color = "var(--black)"
  }
  else{
    const darkback = document.querySelectorAll(".dark-back") 
    darkback.forEach((e) => {
      e.classList.remove("dark-back")
      e.classList.add("light-back")
    })
    const darkcolor = document.querySelectorAll(".dark-color") 
    darkcolor.forEach((e) => {
      e.classList.remove("dark-color")
      e.classList.add("light-color")
    })
  
    document.querySelector(".home").style.backgroundColor = "#FFC96F"
    const btns = document.querySelectorAll("#cardBtn");
    btns.forEach((e) => {
      e.style.backgroundColor = "#FFC96F"
    })
    dlbutton.innerHTML="Dark"
    dlbutton.style.backgroundColor = "var(--black)"
    dlbutton.style.color = "var(--white)"
  }
  isClicked = !isClicked
}
// slider
const container=document.querySelector('.slider-container')

