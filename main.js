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
  price:30
},
{
  id:2,
  img:"images/2.jpg",
  title:"Pack Coffee",
  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nostrum illo impedit quia error assumenda ex delectus quod, obcaecati iste?",
  price:40
},
{
  id:3,
  img:"images/3.png",
  title:"Bubble Tea",
  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nostrum illo impedit quia error assumenda ex delectus quod, obcaecati iste?",
  price:50
},
{
  id:4,
  img:"images/4.png",
  title:"Coffee Mug",
  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nostrum illo impedit quia error assumenda ex delectus quod, obcaecati iste?",
  price:60
},
{
  id:5,
  img:"images/5.png",
  title:"Coffee",
  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nostrum illo impedit quia error assumenda ex delectus quod, obcaecati iste?",
  price:70
},
{
  id:6,
  img:"images/6.png",
  title:"Tea",
  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nostrum illo impedit quia error assumenda ex delectus quod, obcaecati iste?",
  price:80
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
          <div class="card my-card light-card border-0 shadow">
            <img src="${e.img}" Onmouseover="ChangeImage(this)" Onmouseout="RestoreImage()" class="card-img-top" alt="${e.title}">
            <div class="card-body">
              <h5 id="cardTitle" class="card-title">${e.title}</h5>
              <p id="cardDes" class="card-text">${e.description}</p>
              <button id="cardBtn" class="btn" onclick="addToCart(${e.id})">Add To Card</button>
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
const Loginbutton = document.getElementById("Login")
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
    const lightcard = document.querySelectorAll(".light-card") 
    lightcard.forEach((e) => {
      e.classList.remove("light-card")
      e.classList.add("dark-card")
    })
  
    document.querySelector(".home").style.backgroundColor = "#FFBF00"
    
    const btns = document.querySelectorAll("#cardBtn");
    btns.forEach((e) => {
      e.style.backgroundColor = "#FFBF00"
    })
    dlbutton.innerHTML="Light"
    dlbutton.style.backgroundColor = "var(--white)"
    dlbutton.style.color = "var(--black)"
    Loginbutton.style.backgroundColor = "var(--white)"
    Loginbutton.style.color = "var(--black)"

    
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
    const darkcard = document.querySelectorAll(".dark-card") 
    darkcard.forEach((e) => {
      e.classList.remove("dark-card")
      e.classList.add("light-card")
    })
  
    document.querySelector(".home").style.backgroundColor = "#FFC96F"
    const btns = document.querySelectorAll("#cardBtn");
    btns.forEach((e) => {
      e.style.backgroundColor = "#FFC96F"
    })
    dlbutton.innerHTML="Dark"
    dlbutton.style.backgroundColor = "var(--black)"
    dlbutton.style.color = "var(--white)"
    Loginbutton.style.backgroundColor = "var(--black)"
    Loginbutton.style.color = "var(--white)"
  }
  isClicked = !isClicked
}
// slider

const container = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
const arrLeft = document.querySelector('.arrow-left');
const arrRight = document.querySelector('.arrow-right');

let offset = 0;

let slideIncrement = 0;

let slideDecrement = slides.length - 1;

arrRight.addEventListener('click', () => {
  console.log("agareza");
    arrRight.disabled = true;
    offset = slides[0].offsetWidth;
    container.style.transition = "ease-in-out 500ms"
    container.style.right = -offset + 'px';

    setTimeout(() => {
        container.style.transition = "none";
        slides[slideIncrement].style.order = slides.length - 1;
        container.style.left = 0;
        slideIncrement++;
        slideDecrement = slideIncrement - 1;
        
        if (slideIncrement === slides.length){
        slideIncrement = 0;
        slides.forEach(slide => {
            slide.style.order = "initial";
        });
        }
        arrRight.disabled = false;
    },500);
});

arrLeft.addEventListener('click', () => {
    arrLeft.disabled = true;
    offset = slides[0].offsetWidth ;
    container.style.transition = "none";

    if(slideDecrement < 0){
        slides.forEach(slide => {
            slide.style.order = "initial";
        });

        slideDecrement = slides.length - 1;
    }
    slides[slideDecrement].style.order = "-1";
    container.style.left = -offset + 'px';

    setTimeout(() => {
        container.style.transition = "ease-in-out 500ms";
        container.style.left = 0; 
    },1);

    setTimeout(() => {
        slideDecrement--;
        slideIncrement = slideDecrement + 1;
        arrLeft.disabled = false;
    }, 500);
});


//login form starts
let loginForm = document.querySelector('.login-container')
document.querySelector('.login').onclick = () => {
    loginForm.classList.add('active');
}

document.querySelectorAll(".close-login-btn").forEach( (item) => item.onclick = () => {
    loginForm.classList.remove('active');
})
//login form ends


//add to cart
const product_sells=[];

function addToCart(e) {
  var x = document.getElementById("cart-snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

  product_sells.push(e)
  
  }
//card
const page = document.getElementById("mode")
const cart_nav = document.getElementById("product-cart_nav")
const cartPage = document.getElementById("cart-page") 
const home_nav = document.getElementById("home-nav") 
const contact_nav = document.getElementById("product-nav") 
const review_nav = document.getElementById("review-nav") 

cart_nav.onclick = ()=>{
  cartPage.style.display = ""
  page.style.display = "none"
  

const cart_card_section = document.getElementById("buy-product")
const factor_section = document.getElementById("factor-section")

const newarray =[]

product_sells.forEach((e) => {
  newarray.push(productsData[e-1])
})

if(!newarray.length){
  cart_section.innerHTML =`<h3 class="light-color carth3">Nothing To Show here</h3>`
}

else{sellitemdis()
}


//---------------------------
function sellitemdis() {
  
  let totalPrice = 0;
  console.log(newarray);
  for (let i = 0; i < newarray.length; i++) {
    let Price = parseFloat(newarray[i].Price);
  if (!isNaN(Price)) {
    totalPrice += Price;
  }
  }
    let selecteditemsHTML = newarray.map(
        e => 
        `
          <div class="card my-card light-card border-0 shadow">
            <img src="${e.img}" class="card-img-top" alt="${e.title}">
            <div class="card-body">
              <h5 id="cardTitle" class="card-title">${e.title}</h5>
              <p id="cardDes" class="card-text">${e.price} $</p>
              <button id="cardBtn" class="btn" onclick="deleteofcart()">Delete</button>
            </div>
          </div>
        `
    )
    cart_card_section.innerHTML = selecteditemsHTML
    factor_section.innerHTML = `                   
    <div class="hr-line-p">
        <div class="hr-line"></div>
    </div>  
    <div class="card-sec">
    <div class="light-back card-cart container text-center">
        <div class="row">
            <div class="col-6 my-5" >
                <h2>Number of products: ${newarray.length}</h2>
                <h2>total price:${totalPrice}</h2>
                <h2>discount: 30</h2>
              </div>
              
              <div class="col-6 sec-two-cart" >
                <h2 class="my-5">The amount payable: ${totalPrice}</h2>
                <button class="Finalize">Finalize the purchase</button>
              </div>
        </div>    
        </div>   
     </div>    `
}


}

home_nav.onclick = () =>{
  cartPage.style.display = "none"
  page.style.display = ""
}

contact_nav.onclick = () =>{
  cartPage.style.display = "none"
  page.style.display = ""
}
review_nav.onclick = () =>{
  cartPage.style.display = "none"
  page.style.display = ""
}
//contact us
const contactBtn = document.getElementById("contact")
contactBtn.onclick = () => {
  var x = document.getElementById("contact-snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

}