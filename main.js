// heroImg
window.onload = function () {
  var image = document.getElementById("heroPic");
  image.classList.add("slide-down");
};

let imgs;

let productsData = [];
fetch("./sells.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    productsData = [...data];
    console.log(productsData);
    itemdis();
  })
  .catch((error) => {
    console.error(error);
  });

const sectionElement = document.getElementById("productCads");
const searchParms = new URLSearchParams(window.location.search);
current_page = searchParms.get("page");
if (current_page == null) {
  current_page = 1;
}

//---------------------------
//saerch

let saerchQuery = "";
const searchInput = document.getElementById("search-input");
searchInput.onchange = () => {
  saerchQuery = searchInput.value;
  current_page = 1;
  
  searchParms.delete("page")
  searchParms.set("page",1);
  window.location.search.replace(searchParms)
  itemdis();

};

function itemdis() {
  function filterItems(saerchQuery) {
    return productsData.filter((p) => {
      return p.title.toLowerCase().startsWith(saerchQuery.toLowerCase());
    });
  }
  const filteredItems = filterItems(saerchQuery);
  console.log(filteredItems);
  const selecteditems = filteredItems.slice(
    (current_page - 1) * 6,
    current_page * 6
  );
  console.log(selecteditems);
  let selecteditemsHTML = selecteditems.map(
    (e) =>
      `
          <div class="card my-card light-card border-0 shadow">
            <img src="${e.img}" Onmouseover="ChangeImage(this)" Onmouseout="RestoreImage()" class="card-img-top" alt="${e.title}">
            <div class="card-body">
              <h5 id="cardTitle" class="card-title">${e.title}</h5>
              <p id="cardDes" class="card-text">${e.description}</p>
              <p id="cardDes" class="card-text">${e.price} $</p>

              <button id="cardBtn" class="btn" onclick="addToCart(${e.id})">Add To Card</button>
            </div>
          </div>
        `
  );
  sectionElement.innerHTML = selecteditemsHTML;

  const buttonElement = document.getElementById("button");

  const but_cnt = Math.ceil(filteredItems.length / 6);
  let paginationButtons = "";
  for (let i = 1; i <= but_cnt; i++) {
    paginationButtons += `<a href=?page=${i}#product><button class="pgbtn">${i}</button></a>`;
  }
  buttonElement.innerHTML = paginationButtons;

  const buttons = document.querySelectorAll(".pgbtn");
  buttons[current_page - 1].classList = "btnselected";

  imgs = document.querySelectorAll(".card-img-top");
}

function ChangeImage(img) {
  img.src = "images/replaceImg.jpg";
}

function RestoreImage() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].src = productsData.slice((current_page - 1) * 6, current_page * 6)[
      i
    ].img;
  }
}
// -------------------------

// dl mode
const dlbutton = document.getElementById("dlmode");
const Loginbutton = document.getElementById("Login");
//false => light / true =>dark
let isClicked = true;
dlbutton.onclick = () => {
  if (isClicked) {
    const lightback = document.querySelectorAll(".light-back");
    lightback.forEach((e) => {
      e.classList.remove("light-back");
      e.classList.add("dark-back");
    });
    const lightcolor = document.querySelectorAll(".light-color");
    lightcolor.forEach((e) => {
      e.classList.remove("light-color");
      e.classList.add("dark-color");
    });
    const lightcard = document.querySelectorAll(".light-card");
    lightcard.forEach((e) => {
      e.classList.remove("light-card");
      e.classList.add("dark-card");
    });

    document.querySelector(".home").style.backgroundColor = "#FFBF00";

    const btns = document.querySelectorAll("#cardBtn");
    btns.forEach((e) => {
      e.style.backgroundColor = "#FFBF00";
    });
    dlbutton.innerHTML = "Light";
    dlbutton.style.backgroundColor = "var(--white)";
    dlbutton.style.color = "var(--black)";
    Loginbutton.style.backgroundColor = "var(--white)";
    Loginbutton.style.color = "var(--black)";
  } else {
    const darkback = document.querySelectorAll(".dark-back");
    darkback.forEach((e) => {
      e.classList.remove("dark-back");
      e.classList.add("light-back");
    });
    const darkcolor = document.querySelectorAll(".dark-color");
    darkcolor.forEach((e) => {
      e.classList.remove("dark-color");
      e.classList.add("light-color");
    });
    const darkcard = document.querySelectorAll(".dark-card");
    darkcard.forEach((e) => {
      e.classList.remove("dark-card");
      e.classList.add("light-card");
    });

    document.querySelector(".home").style.backgroundColor = "#FFC96F";
    const btns = document.querySelectorAll("#cardBtn");
    btns.forEach((e) => {
      e.style.backgroundColor = "#FFC96F";
    });
    dlbutton.innerHTML = "Dark";
    dlbutton.style.backgroundColor = "var(--black)";
    dlbutton.style.color = "var(--white)";
    Loginbutton.style.backgroundColor = "var(--black)";
    Loginbutton.style.color = "var(--white)";
  }
  isClicked = !isClicked;
};
// slider

const container = document.querySelector(".slider-container");
const slides = document.querySelectorAll(".slide");
const arrLeft = document.querySelector(".arrow-left");
const arrRight = document.querySelector(".arrow-right");

let offset = 0;

let slideIncrement = 0;

let slideDecrement = slides.length - 1;

arrRight.addEventListener("click", () => {
  console.log("agareza");
  arrRight.disabled = true;
  offset = slides[0].offsetWidth;
  container.style.transition = "ease-in-out 500ms";
  container.style.right = -offset + "px";

  setTimeout(() => {
    container.style.transition = "none";
    slides[slideIncrement].style.order = slides.length - 1;
    container.style.left = 0;
    slideIncrement++;
    slideDecrement = slideIncrement - 1;

    if (slideIncrement === slides.length) {
      slideIncrement = 0;
      slides.forEach((slide) => {
        slide.style.order = "initial";
      });
    }
    arrRight.disabled = false;
  }, 500);
});

arrLeft.addEventListener("click", () => {
  arrLeft.disabled = true;
  offset = slides[0].offsetWidth;
  container.style.transition = "none";

  if (slideDecrement < 0) {
    slides.forEach((slide) => {
      slide.style.order = "initial";
    });

    slideDecrement = slides.length - 1;
  }
  slides[slideDecrement].style.order = "-1";
  container.style.left = -offset + "px";

  setTimeout(() => {
    container.style.transition = "ease-in-out 500ms";
    container.style.left = 0;
  }, 1);

  setTimeout(() => {
    slideDecrement--;
    slideIncrement = slideDecrement + 1;
    arrLeft.disabled = false;
  }, 500);
});

//login form starts
let loginForm = document.querySelector(".login-container");
document.querySelector(".login").onclick = () => {
  loginForm.classList.add("active");
};

document.querySelectorAll(".close-login-btn").forEach(
  (item) =>
    (item.onclick = () => {
      loginForm.classList.remove("active");
    })
);
//login form ends

//add to cart
let product_sells = [];

function addToCart(pid) {
  if (productsData.length < 1) {
    product_sells = JSON.parse(window.localStorage.getItem("product_sells"));
  }
  var x = document.getElementById("cart-snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);

  let existingItemIndex = product_sells.findIndex((p) => p.product_id === pid);

  if (existingItemIndex !== -1) {
    product_sells[existingItemIndex].count =
      product_sells[existingItemIndex].count + 1;
  } else {
    product_sells.push({ product_id: pid, count: 1 });
  }
  window.localStorage.setItem("product_sells", JSON.stringify(product_sells));
}
//detele of cart
function deleteOfCart(pid) {
  let existingItemIndex = product_sells.findIndex((p) => p.product_id === pid);

  if (existingItemIndex !== -1) {
    product_sells.splice(existingItemIndex, 1);
    window.localStorage.setItem("product_sells", JSON.stringify(product_sells));
    showCartList();
  }
}
//card
const page = document.getElementById("mode");
const cart_nav = document.getElementById("product-cart_nav");
const cartPage = document.getElementById("cart-page");
const home_nav = document.getElementById("home-nav");
const product_nav = document.querySelectorAll("#product-nav");
const review_nav = document.getElementById("review-nav");
const contact_nav = document.getElementById("contact-nav");
const cart_card_section = document.getElementById("buy-product");
const factor_section = document.getElementById("factor-section");

function showCartList() {
  cartPage.style.display = "";
  page.style.display = "none";

  const newarray = [];
  if (product_sells.length < 1) {
    product_sells = JSON.parse(window.localStorage.getItem("product_sells"));
  }
  product_sells.forEach((p) => {
    newarray.push({ data: productsData[p.product_id - 1], count: p.count });
  });
  if (!newarray.length) {
    factor_section.innerHTML = `<div class="notitem">
  <h3 class="light-color carth3">Nothing To Show here</h3>
</div>
<div class="notitem">
<a style="text-decoration: none;"
href="#product"><button class="goShop" onclick="goshop()">go for shoping</button></a>
</div>`;
  } else {
    sellitemdis(newarray);
  }
}

cart_nav.onclick = () => {
  showCartList();
};

function sellitemdis(newarray) {
  let totalPrice = 0;
  let productCount = 0;

  console.log(newarray);
  for (let i = 0; i < newarray.length; i++) {
    let price = parseFloat(newarray[i].data.price);
    productCount += newarray[i].count;
    totalPrice += price * newarray[i].count;
  }
  let selecteditemsHTML = newarray.map(
    (p) =>
      `
        <div class="card my-card light-card border-0 shadow">
          <img src="${p.data.img}" class="card-img-top" alt="${p.data.title}">
          <div class="card-body">
            <h5 id="cardTitle" class="card-title">${p.data.title}</h5>
            <p id="cardDes" class="card-text">price : ${
              p.data.price * p.count
            } $</p>
            <p id="cardDes" class="card-text">count : ${p.count}</p>
            <button id="cardBtn" class="btn bg-danger text-white" onclick="deleteOfCart(${
              p.data.id
            })">Delete</button>
          </div>
        </div>
      `
  );
  cart_card_section.innerHTML = selecteditemsHTML;
  factor_section.innerHTML = `                   
  <div class="hr-line-p">
      <div class="hr-line"></div>
  </div>  
  <div class="card-sec">
  <div class="light-back card-cart container text-center">
      
          <div class="col-12 my-5" >
              <h2>Number of products: ${productCount}</h2>
              <h2>total price:${totalPrice} $</h2>
              <button class="Finalize">Finalize the purchase</button>

            </div>
      
      </div>   
   </div>    `;
}

home_nav.onclick = () => {
  cartPage.style.display = "none";
  page.style.display = "";
};
product_nav.forEach((e) => {
  e.onclick = () => {
    cartPage.style.display = "none";
    page.style.display = "";
  };
});
review_nav.onclick = () => {
  cartPage.style.display = "none";
  page.style.display = "";
};
contact_nav.onclick = () => {
  cartPage.style.display = "none";
  page.style.display = "";
};

function goshop() {
  cartPage.style.display = "none";
  page.style.display = "";
}
//contact us
const contactBtn = document.getElementById("contact");
contactBtn.onclick = () => {
  var x = document.getElementById("contact-snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
};
// to top
const toTop = document.querySelector(".go-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 150) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
//progressbar
document.addEventListener('DOMContentLoaded', () => {
  const progressBar = document.getElementById('progressBar');
  window.addEventListener('scroll', () => {
      const scrollAmount = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrollAmount / windowHeight) * 100;
      progressBar.style.width = scrollPercentage + '%';
  });
});
