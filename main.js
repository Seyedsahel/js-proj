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
  title:"macha",
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
  <img src="${e.img}" Onmouseover="ChangeImage${e.id}()" Onmouseout="RestoreImage${e.id}()" class="card-img-top" alt="${e.title}">
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

function ChangeImage1() {
  
    imgs[0].src = "images/replaceImg.jpg";
    
}

function RestoreImage1() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].src = productsData[i].img;
  }
}

function ChangeImage2() {
  
  imgs[1].src = "images/replaceImg.jpg";
  
}

function RestoreImage2() {
for (let i = 0; i < imgs.length; i++) {
  imgs[i].src = productsData[i].img;
}
}
function ChangeImage3() {
  
  imgs[2].src = "images/replaceImg.jpg";
  
}

function RestoreImage3() {
for (let i = 0; i < imgs.length; i++) {
  imgs[i].src = productsData[i].img;
}
}
function ChangeImage4() {
  
  imgs[3].src = "images/replaceImg.jpg";
  
}

function RestoreImage4() {
for (let i = 0; i < imgs.length; i++) {
  imgs[i].src = productsData[i].img;
}
}
function ChangeImage5() {
  
  imgs[4].src = "images/replaceImg.jpg";
  
}

function RestoreImage5() {
for (let i = 0; i < imgs.length; i++) {
  imgs[i].src = productsData[i].img;
}
}
function ChangeImage6() {
  
  imgs[5].src = "images/replaceImg.jpg";
  
}

function RestoreImage6() {
for (let i = 0; i < imgs.length; i++) {
  imgs[i].src = productsData[i].img;
}
}