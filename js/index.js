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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// CTA

let ctaElement = document.querySelector('.cta-text');
ctaElement.style.marginLeft = '100px'
ctaElement.style.alignText = 'center'

let headerText = document.getElementsByTagName('h1');
headerText[0].textContent = "DOM"
// headerText[0].style.width = '41%'

let headerTwo = document.createElement('h1');
let headerTwoText = document.createTextNode('Is');
headerTwo.appendChild(headerTwoText);
headerText[0].appendChild(headerTwo);

let headerThree = document.createElement('h1');
let headerThreeText = document.createTextNode('Awesome');
headerThree.appendChild(headerThreeText);
headerText[0].appendChild(headerThree);


let buttonText = document.getElementsByTagName('button');
buttonText[0].textContent = siteContent.cta.button
// buttonText[0].style.marginLeft = '50px'

// H4s

let header4Text = document.querySelectorAll('h4');

header4Text[0].textContent = siteContent["main-content"]["features-h4"]
header4Text[1].textContent = siteContent["main-content"]["about-h4"]

header4Text[2].textContent = siteContent["main-content"]["services-h4"]
header4Text[3].textContent = siteContent["main-content"]["product-h4"]
header4Text[4].textContent = siteContent["main-content"]["vision-h4"]

header4Text[5].textContent = siteContent["contact"]["contact-h4"]

// Paragraphs

let paragraphText = document.querySelectorAll('p');

paragraphText[0].textContent = siteContent["main-content"]["features-content"]
paragraphText[1].textContent = siteContent["main-content"]["about-content"]

paragraphText[2].textContent = siteContent["main-content"]["services-content"]
paragraphText[3].textContent = siteContent["main-content"]["product-content"]
paragraphText[4].textContent = siteContent["main-content"]["vision-content"]

paragraphText[5].textContent = siteContent.contact.address
paragraphText[5].style.width = '20%'
paragraphText[6].textContent = siteContent.contact.phone
paragraphText[7].textContent = siteContent.contact.email

// Navigation

let linkText = document.querySelectorAll('a');
let navi = document.getElementsByTagName('nav');

linkText[0].textContent = siteContent["nav"]["nav-item-1"]
linkText[0].style.color = 'green'
linkText[1].textContent = siteContent["nav"]["nav-item-2"]
linkText[1].style.color = 'green'
linkText[2].textContent = siteContent["nav"]["nav-item-3"]
linkText[2].style.color = 'green'
linkText[3].textContent = siteContent["nav"]["nav-item-4"]
linkText[3].style.color = 'green'
linkText[4].textContent = siteContent["nav"]["nav-item-5"]
linkText[4].style.color = 'green'
linkText[5].textContent = siteContent["nav"]["nav-item-6"]
linkText[5].style.color = 'green'

let firstChild = document.createElement('a');
let firstChildText = document.createTextNode('First');
firstChild.appendChild(firstChildText);
firstChild.href = '#';
firstChild.style.color = 'green'
navi[0].prepend(firstChild);

let lastChild = document.createElement('a');
let lastChildText = document.createTextNode('Last');
lastChild.appendChild(lastChildText);
lastChild.href = '#';
lastChild.style.color = 'green'
navi[0].appendChild(lastChild);

console.log(linkText);

// Footer
let footerText = document.querySelector('footer').children;
footerText[0].textContent = siteContent.footer.copyright
