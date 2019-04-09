const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo


// selectors

let nav = document.querySelector('nav');
let navItems = nav.querySelectorAll('a');


for (let i = 0; i < navItems.length; i++) {
  
  navItems[i].textContent = siteContent.nav[`nav-item-${i + 1}`]
  navItems[i].style.color = "green";
  
}



//create new nav item 
let newNavItem1 = document.createElement("a");
newNavItem1.textContent = "Team";
newNavItem1.style.color = "green";
nav.appendChild(newNavItem1);

let newNavItem2 = document.createElement("a");
newNavItem2.textContent = "WAaaaaAT";
newNavItem2.style.color = "green";
nav.prepend(newNavItem2);


let cta = document.querySelector(".cta")

let ctaMain = document.querySelector('.cta .cta-text h1');
ctaMain.textContent = siteContent["cta"]["h1"];

let ctaButton = document.querySelector(".cta .cta-text button")
  ctaButton.textContent = siteContent["cta"]["button"];




let topH4 = document.querySelectorAll(".top-content h4");
let topParagraphs = document.querySelectorAll(".top-content p");

topH4[0].textContent = siteContent["main-content"]["features-h4"];
topH4[1].textContent = siteContent["main-content"]["about-h4"];
topParagraphs[0].textContent = siteContent["main-content"]["features-content"]
topParagraphs[1].textContent = siteContent["main-content"]["about-content"]


let botH4 = document.querySelectorAll(".bottom-content h4");
let botParagraphs = document.querySelectorAll(".bottom-content p");

botH4[0].textContent = siteContent["main-content"]["services-h4"];
botH4[1].textContent = siteContent["main-content"]["product-h4"];
botH4[2].textContent = siteContent["main-content"]["vision-h4"];
botParagraphs[0].textContent = siteContent["main-content"]["services-content"];
botParagraphs[1].textContent = siteContent["main-content"]["product-content"];
botParagraphs[2].textContent = siteContent["main-content"]["vision-content"];

// attribute pics 
let logo = document.getElementById("logo-img");
  logo.setAttribute("src", siteContent["nav"]["img-src"]);
  


const circlePic = document.getElementById("cta-img");
  circlePic.src = 'img/header-img.png';
  circlePic.alt = "pic of circle with random code";


const middlePic = document.getElementById("middle-img");
  middlePic.src = 'img/mid-page-accent.jpg';
  middlePic.alt = "picture in center of page";



// make text green
const greenifyNav = document.querySelectorAll('a');
  greenifyNav.forEach( function( currentValue) {
    currentValue.style.color = 'green';
  });














