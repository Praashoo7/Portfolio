/*---------------------------------------------------------------------- THEME_SWITCH_START ----------------------------------------------------------------------*/

const toggleSwitchsecond = document.querySelector('.theme-switch-second input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitchsecond.addEventListener('change', switchTheme, false);
// store user preference for future visits
function switchTheme(e) {
  if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark'); //add this
  }
  else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light'); //add this
  }    
}
const currentThemeSecond = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentThemeSecond) {
    document.documentElement.setAttribute('data-theme', currentThemeSecond);

    if (currentThemeSecond === 'dark') {
        toggleSwitchsecond.checked = true;
    }
    else if (currentThemeSecond === 'light') {
    }
}

/*<!---------------------------------------------------------------------- SEND_MAIL ---------------------------------------------------------------------->*/

function sendmail(){

    b=document.getElementById("mailBtn");
    n=document.getElementById('name').value;
    const originalText = b.innerHTML;

    var isOnLine = navigator.onLine;
    if (isOnLine) {
      b.disabled = true;
      b.innerHTML = "Sending..";
      b.style.opacity = 0.8;
      
      var params = {
      name:document.getElementById('name').value,
      email:document.getElementById('email').value,
      message:document.getElementById('message').value,
      };

      const serviceID="service_8su5ell";
      const templateID="template_qrr1ezq";

      emailjs.send(serviceID,templateID,params)
      .then(
           res =>{
              document.getElementById('name').value="";
              document.getElementById('email').value="";
              document.getElementById('message').value="";
              console.log(res);

              b.innerHTML = "Hi "+n+", Thank you For Reaching Out.";
              b.style.textTransform = "none";
              b.style.opacity = "1";

              setTimeout(function() {
                b.innerHTML = originalText;
                b.style.textTransform = "uppercase";
              }, 3000);

              b.disabled = false;

          }
      )
      .catch(err => {
        console.log(err);
        
        b.innerHTML = "Sorry "+n+", An error occurred. Please try again later!";
        b.style.textTransform = "none";
        b.style.opacity = "1";

        setTimeout(function() {
          b.innerHTML = originalText;
          b.style.textTransform = "uppercase";
        }, 4000); 

      });
      } else {
        b.innerHTML = "Hi "+n+", Please check your Internet Connection!";
        b.style.textTransform = "none";
        b.style.opacity = "1";

        setTimeout(function() {
          b.innerHTML = originalText;
          b.style.textTransform = "uppercase";
        }, 3000);

      }
}


/*<!---------------------------------------------------------------------- CLOCK ---------------------------------------------------------------------->*/


const displayTime = document.querySelector(".display-time");
// Time
function showTime() {
  let time = new Date();
  displayTime.innerText = time.toLocaleTimeString("en-US", { hour12: false });
  setTimeout(showTime, 1000);
}

showTime();

// Date
function updateDate() {
  let today = new Date();

  // return number
  let dayName = today.getDay(),
    dayNum = today.getDate(),
    month = today.getMonth(),
    year = today.getFullYear();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayWeek = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];
  
    // Get the suffix for the day number
    function getDaySuffix(day) {
      if (day >= 11 && day <= 13) {
        return "th";
      }
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    }

  // value -> ID of the html element
  const IDCollection = ["day", "daynum", "month", "year"];
  // return value array with number as a index
  const val = [dayWeek[dayName], dayNum + getDaySuffix(dayNum), months[month], year];
  for (let i = 0; i < IDCollection.length; i++) {
    document.getElementById(IDCollection[i]).firstChild.nodeValue = val[i];
  }
}

updateDate();


/*<!---------------------------------------------------------------------- MAIL-TO ---------------------------------------------------------------------->*/


function mailDefault(){
  var email = "meprashant00@gmail.com";
  window.open(`mailto:${email}`);
}


/*<!---------------------------------------------------------------------- GO-TO ---------------------------------------------------------------------->*/


function goToP() {
    const divToScroll = document.getElementById('projects'); // Replace 'yourDivId' with the actual ID of your target div
    const offset = 11 * parseFloat(getComputedStyle(document.documentElement).fontSize); // Calculate 5em in pixels
    
    const targetPosition = divToScroll.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth', // You can change this to 'auto' for instant scrolling without smooth animation
    });
}

function goToM() {
  const divToScroll = document.getElementById('me'); // Replace 'yourDivId' with the actual ID of your target div
  const offset = 9 * parseFloat(getComputedStyle(document.documentElement).fontSize); // Calculate 5em in pixels
  
  const targetPosition = divToScroll.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth', // You can change this to 'auto' for instant scrolling without smooth animation
  });
}

function goToC() {
  const divToScroll = document.getElementById('letschat'); // Replace 'yourDivId' with the actual ID of your target div
    const offset = 11 * parseFloat(getComputedStyle(document.documentElement).fontSize); // Calculate 5em in pixels
    
    const targetPosition = divToScroll.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth', // You can change this to 'auto' for instant scrolling without smooth animation
    });
}


/*<!---------------------------------------------------------------------- SCROLL-ANIMATIONS ---------------------------------------------------------------------->*/

function reveal(className, elementVisible) {
  var reveals = document.querySelectorAll("." + className);

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

function setupRevealListeners() {
  var classNames = ["reveal00", "reveal01", "reveal02", "reveal03", "reveal04", "revealM", "revealC", "reveal", "reveal1", "reveal11", "reveal111"];
  var elementVisibles = [0, 0, 0, 0, 0, -100, -10, 0, 90, 90, 100];

  classNames.forEach(function(className, index) {
    window.addEventListener("scroll", function() {
      reveal(className, elementVisibles[index]);
    });
    window.addEventListener("DOMContentLoaded", function() {
      reveal(className, elementVisibles[index]);
    });
  });
}

// Setup event listeners for reveal functions
setupRevealListeners();


/*<!---------------------------------------------------------------------- Click-Me ---------------------------------------------------------------------->*/


const animateButton = document.getElementById('ic');
var y = document.getElementById('las');
var clickCounter = 0;

animateButton.addEventListener('click', () => {
    // Create a clone of the original animatedBox
    const animatedBox = document.getElementById('coin');
    const clone = animatedBox.cloneNode(true);

    // Append the clone to the parent element
    animatedBox.parentNode.appendChild(clone);

    // Remove the "animate" class if it already exists (from the clone, not the original)
    clone.classList.remove('animate');

    // Trigger the reflow by reading the offsetHeight property
    // This is to ensure the animation starts from the beginning
    void clone.offsetWidth;

    // Add the "animate" class to the clone to trigger the animation
    clone.classList.add('animate');

    // Remove the clone after the animation is complete (optional)
    clone.addEventListener('animationend', () => {
      clone.remove();
    });

    clickCounter++;

  
    if (clickCounter === 10) {
      showMessage("Oh, you like the Animation!", 3000);
      document.getElementById("ic").style.animation = "none";
    } else if (clickCounter === 35) {
      showMessage("I guess you can stop Now. How many Coins do you Need?", 3000);
    } else if (clickCounter === 75) {
      showMessage("You really clicked 75 times!", 3000);
    } else if (clickCounter === 100) {
      showMessage("You are at a Whooping 100 now!", 3000);
    } else if (clickCounter === 140) {
      showMessage("140! Feel mature enough?", 3000);
    } else if (clickCounter === 170) {
      showMessage1("01011001 01101111 01110101 01010010 01100101 01100001 01101100 01101100 01111001 01001000 01100001 01110110 01100101 01010100 01101001 01101101 01100101", 5000);
    } else if (clickCounter === 200) {
      showRedditLinkMessage();
    } else if (clickCounter === 250) {
      showGiftMessage();
      document.getElementById("ic").style.pointerEvents = "none";
    }
  });
  
  // Function to display the message and progress bar
  function showMessage(message, duration) {

    var x = document.getElementById("amessage");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

    const messageElement = document.getElementById("amessage");
    messageElement.textContent = message;
  
    const progressBar = document.createElement("div");
    progressBar.className = "progress-bar";
    messageElement.appendChild(progressBar);

    const startTime = Date.now();
    function animate() {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(1, elapsedTime / duration);
      progressBar.style.width = `${progress * 100}%`;
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        progressBar.remove();
        messageElement.textContent = "";
      }
    }

    requestAnimationFrame(animate);
}

// Function to display the message and progress bar
function showMessage1(message, duration) {

  var x = document.getElementById("amessage");
  x.className = "show1";
  setTimeout(function(){ x.className = x.className.replace("show1", ""); }, 5000);

  const messageElement = document.getElementById("amessage");
  messageElement.textContent = message;

  const progressBar = document.createElement("div");
  progressBar.className = "progress-bar";
  messageElement.appendChild(progressBar);

  const startTime = Date.now();
  function animate() {
    const elapsedTime = Date.now() - startTime;
    const progress = Math.min(1, elapsedTime / duration);
    progressBar.style.width = `${progress * 100}%`;
    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      progressBar.remove();
      messageElement.textContent = "";
    }
  }

  requestAnimationFrame(animate);
}
  
  // Function to show the Reddit link message
  function showRedditLinkMessage() {
    const duration = 5000;

    var x = document.getElementById("amessage");
    x.className = "show1";
    setTimeout(function(){ x.className = x.className.replace("show1", ""); }, 5000);
  
    // Create the anchor element
    const link = document.createElement("a");
    link.href = "https://www.reddit.com/r/Showerthoughts/comments/a1f6xu/you_have_too_much_free_time_is_an_insult_even/?utm_source=share&utm_medium=web2x&context=3";
    link.target = "_blank";
    link.textContent = "Reddit🔗";

    // Create a text node for the introductory text
    const textNode = document.createTextNode("Check out this ");

    // Get the "amessage" element
    const amessageElement = document.getElementById("amessage");

    // Clear any existing content in "amessage" (optional, depending on your use case)
    amessageElement.textContent = "";

    // Append the text node and the anchor element as children to "amessage" in the desired order
    amessageElement.appendChild(textNode);
    amessageElement.appendChild(link);
    amessageElement.appendChild(document.createTextNode(" thing."));

     // Create the progress bar element
    const progressBar = document.createElement("div");
    progressBar.className = "progress-bar";
    amessageElement.appendChild(progressBar);

    const startTime = Date.now();
    function animate() {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(1, elapsedTime / duration);
      progressBar.style.width = `${progress * 100}%`;
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        progressBar.remove();
        amessageElement.textContent = ""; // Clear the entire message after the progress bar completes
      }
    }

    requestAnimationFrame(animate);
    
  }
  
  // Function to show the gift message
  function showGiftMessage() {
    const duration = 20000;

    var x = document.getElementById("amessage");
    x.className = "show2";
    setTimeout(function(){ x.className = x.className.replace("show2", ""); }, 20000);
  
    // Create the anchor element for the link
    const link = document.createElement("a");
    link.href = "https://anothermetosee.github.io/Data/";
    link.target = "_blank";
    link.textContent = "Winning Prize🎁";

    // Construct the text content with placeholders for the click count and add the link at the end
    const clickCount = 250;
    const text = `Well, You have passed the Test. I am really Impressed, You clicked total ${clickCount} times. Here is your `;

    // Get the "amessage" element
    const amessageElement = document.getElementById("amessage");

    // Clear any existing content in "amessage" (optional, depending on your use case)
    amessageElement.textContent = "";

    // Create a text node with the combined text and link content
    const combinedContent = document.createTextNode(text);
    amessageElement.appendChild(combinedContent);
    amessageElement.appendChild(link);

    // Add the closing text
    amessageElement.appendChild(document.createTextNode(". Adios 👋."));

     // Create the progress bar element
  const progressBar = document.createElement("div");
  progressBar.className = "progress-bar";
  amessageElement.appendChild(progressBar);

  const startTime = Date.now();
  function animate() {
    const elapsedTime = Date.now() - startTime;
    const progress = Math.min(1, elapsedTime / duration);
    progressBar.style.width = `${progress * 100}%`;
    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      progressBar.remove();
      amessageElement.textContent = ""; // Clear the entire message after the progress bar completes
    }
  }

  requestAnimationFrame(animate);

}



/*<!---------------------------------------------------------------------- CURRENT-YEAR ---------------------------------------------------------------------->*/


document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear();
  document.getElementById("year-c").textContent = new Date().getFullYear();
});



/*<!---------------------------------------------------------------------- CACHED ---------------------------------------------------------------------->*/


// const preloadedImage = new Image();
// preloadedImage.src = "imgs/me.webp";
// preloadedImage.onload = () => {
//     const meimg = document.getElementById("meimg");
//     meimg.src = preloadedImage.src;
// };



/*<!---------------------------------------------------------------------- PROJECT-HOVER-IMAGES ---------------------------------------------------------------------->*/


function setupSlideshow(blockId, lightImages, darkImages) {
  const block = document.getElementById(blockId);
  const image = block.querySelector('.image-wrapper');
  let currentIndex = -1;
  let lastX = 0;
  let timer;

  const debounce = (func, wait) => {
      let timeout;
      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
      };
    };
  
    const onMouseMove = debounce((event) => {
      const currentX = event.clientX;
      clearTimeout(timer);
      image.style.transform = `rotate(${currentX > lastX ? -5 : 5}deg)`;
      timer = setTimeout(() => image.style.transform = "", 10);
      lastX = currentX;
  
      if (!image.getAttribute('src')) {
        const currentImages = getCurrentImages();
        image.setAttribute('src', currentImages[0]);
      }
    });
  
    const onMouseMoveMargin = (event) => {
      const containerWidth = block.offsetWidth;
      const fixedMarginRight = 50;
      const imageWidth = image.offsetWidth;
      const maxLeftMargin = containerWidth - imageWidth;
      const mouseX = event.pageX - block.getBoundingClientRect().left;
      const marginLeft = Math.min(Math.max(mouseX - (imageWidth / 2), 0), maxLeftMargin - fixedMarginRight);
      image.style.marginLeft = marginLeft + 'px';
    };

  const slideshowImg = block.querySelector('.image-wrapper img');
  const slideshowContainer = block.querySelector('.image-wrapper');
  let intervalId;

  function startSlideshow() {
    intervalId = setInterval(nextImage, 4000);
  }

  function stopSlideshow() {
      clearInterval(intervalId);
  }

  block.addEventListener('mouseenter', function(event) { if (navigator.onLine) {image.style.display = 'block';startSlideshow();}else{stopSlideshow();image.style.display = 'block';/*const content = navigator.onLine ? "..." : "No Connection!";document.documentElement.style.setProperty('--image-content', '"' + content + '"');*/}});
  block.addEventListener('mouseleave', stopSlideshow);

  function getCurrentTheme() {
      return localStorage.getItem('theme');
  }

  function getCurrentImages() {
      const theme = getCurrentTheme();
      return theme === 'dark' ? darkImages : lightImages;
  }

  function resetCurrentIndex() {
      currentIndex = -1;
      nextImage();
  }

  function nextImage() {
      currentIndex++;
      if (currentIndex >= getCurrentImages().length) currentIndex = 0;
      slideshowContainer.classList.add('image-wrapper');
      setTimeout(() => {
          slideshowImg.src = navigator.onLine ? getCurrentImages()[currentIndex] : '';
          const content = navigator.onLine ? "..." : "No Connection!";
          document.documentElement.style.setProperty('--image-content', '"' + content + '"');
      }, 500);
      slideshowImg.onload = () => slideshowContainer.classList.remove('image-wrapper');
  }

  function updateImageContent() {
    const content = navigator.onLine ? "..." : "No Connection!";
    document.documentElement.style.setProperty('--image-content', '"' + content + '"');
  }

  updateImageContent();

  block.addEventListener("mousemove", (event) => {
      requestAnimationFrame(() => {
        onMouseMove(event);
        onMouseMoveMargin(event);
      });
    });

  document.addEventListener('DOMContentLoaded', resetCurrentIndex);
  document.getElementById('themeswitch-second').addEventListener('click', resetCurrentIndex); // Reset when theme is changed
}

const lightModeImages1 = ["https://praashoo7.github.io/Figma-Front-End-00/ReadMe-Images/Light_Mode/Login_Light.png", "https://praashoo7.github.io/Figma-Front-End-00/ReadMe-Images/Light_Mode/HomePage_Light.png", "https://praashoo7.github.io/Figma-Front-End-00/ReadMe-Images/Light_Mode/AddItemsPage_Light.png", "https://praashoo7.github.io/Figma-Front-End-00/ReadMe-Images/Light_Mode/Billing_Light.png", "https://praashoo7.github.io/Figma-Front-End-00/ReadMe-Images/Light_Mode/Sales_Light.png"];
const darkModeImages1 = ["https://praashoo7.github.io/Figma-Front-End-00/ReadMe-Images/Dark_Mode/Login_Dark1.png", "https://praashoo7.github.io/Figma-Front-End-00/ReadMe-Images/Dark_Mode/HomePage_Dark.png", "https://praashoo7.github.io/Figma-Front-End-00/ReadMe-Images/Dark_Mode/AddItemsPage_Dark.png", "https://praashoo7.github.io/Figma-Front-End-00/ReadMe-Images/Dark_Mode/Billing_Dark.png", "https://praashoo7.github.io/Figma-Front-End-00/ReadMe-Images/Dark_Mode/Sales_Dark.png"];
const lightModeImages2 = ["https://github.com/Praashoo7/Expense-Data/blob/main/public/ReadMe-Images/ReadMe-Image5.png?raw=true", "https://github.com/Praashoo7/Expense-Data/blob/main/public/ReadMe-Images/ReadMe-Image6.png?raw=true", "https://github.com/Praashoo7/Expense-Data/blob/main/public/ReadMe-Images/ReadMe-Image7.png?raw=true", "https://github.com/Praashoo7/Expense-Data/blob/main/public/ReadMe-Images/ReadMe-Image8.png?raw=true"];
const darkModeImages2 = ["https://github.com/Praashoo7/Expense-Data/blob/main/public/ReadMe-Images/ReadMe-Image1.png?raw=true", "https://github.com/Praashoo7/Expense-Data/blob/main/public/ReadMe-Images/ReadMe-Image2.png?raw=true", "https://github.com/Praashoo7/Expense-Data/blob/main/public/ReadMe-Images/ReadMe-Image3.png?raw=true", "https://github.com/Praashoo7/Expense-Data/blob/main/public/ReadMe-Images/ReadMe-Image4.png?raw=true"];
const lightModeImages3 = ["https://praashoo7.github.io/Color-Blindness-Simulator/ReadMe-Images/Color-Blindness-Simulator.png", "https://praashoo7.github.io/Color-Blindness-Simulator/ReadMe-Images/ButtonB.png"];
const darkModeImages3 = ["https://praashoo7.github.io/Color-Blindness-Simulator/ReadMe-Images/Color-Blindness-Simulator.png", "https://praashoo7.github.io/Color-Blindness-Simulator/ReadMe-Images/ButtonB.png"];
const lightModeImages4 = ["https://praashoo7.github.io/A-Photography-Website/ReadMe-Images/1P.png", "https://praashoo7.github.io/A-Photography-Website/ReadMe-Images/2P.png", "https://praashoo7.github.io/A-Photography-Website/ReadMe-Images/1G.png", "https://praashoo7.github.io/A-Photography-Website/ReadMe-Images/2G.png"];
const darkModeImages4 = ["https://praashoo7.github.io/A-Photography-Website/ReadMe-Images/1PD.png", "https://praashoo7.github.io/A-Photography-Website/ReadMe-Images/2PD.png", "https://praashoo7.github.io/A-Photography-Website/ReadMe-Images/1GD.png", "https://praashoo7.github.io/A-Photography-Website/ReadMe-Images/2GD.png"];
const lightModeImages5 = ["https://praashoo7.github.io/21-Cards-Trick/imgs/ReadMe-Images/MAIN.png"];
const darkModeImages5 = ["https://praashoo7.github.io/21-Cards-Trick/imgs/ReadMe-Images/MAIN.png"];
const lightModeImages6 = ["https://praashoo7.github.io/Collatz-Conjecture/imgs/ReadMe-Images/MAIN.png"];
const darkModeImages6 = ["https://praashoo7.github.io/Collatz-Conjecture/imgs/ReadMe-Images/MAIN.png"];
const lightModeImages7 = ["https://praashoo7.github.io/I-Liked-a-Design/imgs/ReadMe-Images/ReadMe-Green.png", "https://praashoo7.github.io/I-Liked-a-Design/imgs/ReadMe-Images/ReadMe-Red.png", "https://praashoo7.github.io/I-Liked-a-Design/imgs/ReadMe-Images/ReadMe-White.png", "https://praashoo7.github.io/I-Liked-a-Design/imgs/ReadMe-Images/ReadMe-Purple.png"];
const darkModeImages7 = ["https://praashoo7.github.io/I-Liked-a-Design/imgs/ReadMe-Images/ReadMe-Green.png", "https://praashoo7.github.io/I-Liked-a-Design/imgs/ReadMe-Images/ReadMe-Red.png", "https://praashoo7.github.io/I-Liked-a-Design/imgs/ReadMe-Images/ReadMe-White.png", "https://praashoo7.github.io/I-Liked-a-Design/imgs/ReadMe-Images/ReadMe-Purple.png"];
const lightModeImages8 = ["https://praashoo7.github.io/How-Many-Crimes-Have-You-Committed/imgs/ReadMe-Images/ReadMe-Image.png"];
const darkModeImages8 = ["https://praashoo7.github.io/How-Many-Crimes-Have-You-Committed/imgs/ReadMe-Images/ReadMe-Image.png"];

setupSlideshow('FFE1', lightModeImages1, darkModeImages1);
setupSlideshow('FFE2', lightModeImages2, darkModeImages2);
setupSlideshow('FFE3', lightModeImages3, darkModeImages3);
setupSlideshow('FFE4', lightModeImages4, darkModeImages4);
setupSlideshow('FFE5', lightModeImages5, darkModeImages5);
setupSlideshow('FFE6', lightModeImages6, darkModeImages6);
setupSlideshow('FFE7', lightModeImages7, darkModeImages7);
setupSlideshow('FFE8', lightModeImages8, darkModeImages8);



/* ---------- DESIGN-CLUTTER-TEXT-HOVER ---------- */

document.addEventListener("DOMContentLoaded", function () {
  const isNotTouchDevice = !('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
  const isWideEnough = window.innerWidth > 400;

  if (isNotTouchDevice && isWideEnough) {
      const card = document.querySelector(".designClutterCard");
      const clutter = document.querySelector(".designClutter");
      const clutterItems = clutter.querySelectorAll("div");

      const transitionDuration = 1;
      const delayIncrement = 0.1;
      const totalDelay = (clutterItems.length - 1) * delayIncrement + transitionDuration;
      let mouseInside = false;

      card.addEventListener("mouseenter", () => {
          mouseInside = true;

          clutterItems.forEach((item, index) => {
              item.style.transition = `transform ${transitionDuration}s ease ${index * delayIncrement}s`;
              item.style.transform = "rotateZ(15deg)";
          });

          setTimeout(() => {
              if (mouseInside) {
                  clutter.style.transition = "margin 0.4s ease";
                  clutter.style.margin = "0 0.5em 0 0.25em";
              }
          }, totalDelay * 500);
      });

      card.addEventListener("mouseleave", () => {
          mouseInside = false;

          clutterItems.forEach((item, index) => {
              item.style.transition = `transform ${transitionDuration}s ease ${index * delayIncrement}s`;
              item.style.transform = "rotateZ(0deg)";
          });

          setTimeout(() => {
              if (!mouseInside) {
                  clutter.style.transition = "margin 0.4s ease";
                  clutter.style.margin = "0 0.25em 0 0.25em";
              }
          }, totalDelay * 500);
      });
  }
});


/* IMAGE-HOVER */
/* IMAGE EFFECTS FROM - [https://lab.hakim.se/textify/] */

const imgElement = document.getElementById("animatedImage");
const defaultImage = "imgs/me.webp";
const images = Array.from({ length: 11 }, (_, i) => `imgs/variations/${i + 1}.webp`);

let index = 0;
let interval;
let animationComplete = false;
let validImages = [];

const preloadImages = () => {
  const loadPromises = images.map((src, idx) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve({ src, valid: true, index: idx });
      img.onerror = () => resolve({ src, valid: false, index: idx });
      img.src = src;
    });
  });

  loadPromises.push(new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve({ src: defaultImage, valid: true, index: -1 });
    img.onerror = () => resolve({ src: defaultImage, valid: false, index: -1 });
    img.src = defaultImage;
  }));

  Promise.all(loadPromises).then(results => {
    validImages = results
      .filter(img => img.valid && img.index >= 0)
      .sort((a, b) => a.index - b.index)
      .map(img => img.src);

    const defaultLoaded = results.find(img => img.index === -1 && img.valid);
    if (!defaultLoaded) {
      console.error("Default image failed to load");
    }
  });
};

preloadImages();

imgElement.addEventListener("mouseenter", () => {
  if (animationComplete || validImages.length === 0) return;
  
  interval = setInterval(() => {
    imgElement.src = validImages[index];
    index++;
    
    if (index >= validImages.length) {
      animationComplete = true;
      imgElement.src = defaultImage;
      clearInterval(interval);
    }
  }, 70);
});

imgElement.addEventListener("mouseleave", () => {
  clearInterval(interval);
  imgElement.src = defaultImage;
  index = 0;
  animationComplete = false;
});




/* FAVORITES  */
/* ---------- DIWALI ---------- */

let diwaliDate;
const whatAPI = ['2025-10-20', '2026-11-8', '2027-10-29', '2028-10-17', '2029-11-5', '2030-10-26']
for (const date of whatAPI) {
  const D1 = new Date(date);
  D1.setHours(0, 0, 0, 0);
  const startD1 = new Date(D1);
  startD1.setDate(startD1.getDate() - 5);
  const endD1 = new Date(D1);
  endD1.setDate(endD1.getDate() + 5);
  const todayD1 = new Date();
  todayD1.setHours(0, 0, 0, 0);

  if (todayD1 >= startD1 && todayD1 <= endD1) {
    diwaliDate = date;
    break;
  }
}

const FESTIVAL_DATE_DIWALI = diwaliDate;

const festivalDateDiwali = new Date(FESTIVAL_DATE_DIWALI);
festivalDateDiwali.setHours(0, 0, 0, 0);
const startDateDiwali = new Date(festivalDateDiwali);
startDateDiwali.setDate(startDateDiwali.getDate() - 5);
const endDateDiwali = new Date(festivalDateDiwali);
endDateDiwali.setDate(endDateDiwali.getDate() + 5);
const today = new Date();
today.setHours(0, 0, 0, 0);


function handleFestivalDisplayDiwali() {

    if (today >= startDateDiwali && today <= endDateDiwali) {

        const newDiv = document.createElement('div');
        newDiv.className = 'festiveCornerDiwali';
        newDiv.id = 'festiveCornerDiwali';
        newDiv.innerHTML = `
            <!-- LOTTIE ANIMATIONS FROM [lottiefiles.com] BY [JAStudio] & [Emily Zhou]
            LINKS
            [https://lottiefiles.com/free-animation/diwali-diya-MeYAZQYH9N],
            [https://lottiefiles.com/free-animation/fireworks-Qa0DxeLqfw] 
            -->
          <dotlottie-player class="festivalDiwali" id="festivalDiwali" src="https://lottie.host/1ce3e59b-23ee-4b78-8185-0c8ee6464354/RAvsohVLVA.json" background="transparent" speed="1" direction="1" playMode="normal" loop autoplay></dotlottie-player>
          <dotlottie-player class="festivalDiwali1" id="festivalDiwali1" src="https://lottie.host/f100edcd-c4b1-4e10-a808-468437e7ae79/3JEqqS12Qd.json" background="transparent" speed="1" direction="1" playMode="normal" loop="false" autoplay="false"></dotlottie-player>
        `;

        document.body.insertBefore(newDiv, document.body.firstChild);

        const script = document.createElement('script');
        script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
        script.type = 'module';
        document.body.appendChild(script);

        document.getElementById('festiveCornerDiwali').style.display = 'block';
        setTimeout(() => {
            document.getElementById('festivalDiwali').style.opacity = 1;
        }, 100);

        document.getElementById('festiveCornerDiwali').addEventListener('click', function() {
          document.getElementById('festivalDiwali1').style.display = 'block';
          setTimeout(() => {
              document.getElementById('festivalDiwali1').style.opacity = 1;
          }, 100);
          const lottiePlayer = document.getElementById('festivalDiwali1');
          lottiePlayer.stop();
          lottiePlayer.play();
        });
    }
}

handleFestivalDisplayDiwali();



/* ---------- DIWALI-HOVER ---------- */

const hoverDiv = document.getElementById("festiveCornerDiwali");
const targetDiv = document.getElementById("targetText");

const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (!isTouchDevice && today >= startDateDiwali && today <= endDateDiwali) {
  hoverDiv.addEventListener("mouseover", () => {
    targetDiv.style.opacity = 0
    setTimeout(() => {
      targetDiv.innerHTML = 'Happy Diwali, Click for 🎇';
      targetDiv.style.scale = 0.85
      targetDiv.style.opacity = 1
    }, 200);
  });
} else if(isTouchDevice && today >= startDateDiwali && today <= endDateDiwali) {
  hoverDiv.addEventListener("click", () => {
    targetDiv.style.opacity = 0
    setTimeout(() => {
      targetDiv.innerHTML = 'Happy Diwali!';
      targetDiv.style.scale = 0.85
      targetDiv.style.opacity = 1
    }, 200);
    setTimeout(() => {
      targetDiv.style.opacity = 0
      setTimeout(() => {
        targetDiv.innerHTML = "Hi, I'm Prashant <span class='wave'>👋</span>";
        targetDiv.style.scale = 1
        targetDiv.style.opacity = 1
      }, 200);
    }, 4000);
  });
}

if (!isTouchDevice && today >= startDateDiwali && today <= endDateDiwali) {
  hoverDiv.addEventListener("mouseout", () => {
    targetDiv.style.opacity = 0
    setTimeout(() => {
      targetDiv.innerHTML = "Hi, I'm Prashant <span class='wave'>👋</span>";
      targetDiv.style.scale = 1
      targetDiv.style.opacity = 1
    }, 200);
  });
}

// hoverDiv.addEventListener("mouseover", () => {
//   targetDiv.style.animation = 'diIn 0.5s ease-in-out forwards';
//   setTimeout(() => {
//     targetDiv.style.animation = 'diOut 0.5s ease-in-out forwards';
//   }, 1500);
// });



/* ---------- CHRISTMAS ---------- */

const FESTIVAL_DATE = new Date().getFullYear() +'-12-25';

const festivalDate = new Date(FESTIVAL_DATE);
festivalDate.setHours(0, 0, 0, 0);
const startDate = new Date(festivalDate);
startDate.setDate(startDate.getDate() - 5);
const endDate = new Date(festivalDate);
endDate.setDate(endDate.getDate() + 6);


function handleFestivalDisplay() {

    if (today >= startDate && today <= endDate) {

        const newDiv = document.createElement('div');
        newDiv.className = 'festiveCorner';
        newDiv.id = 'festiveCorner';
        newDiv.innerHTML = `
          <!-- LOTTIE ANIMATIONS FROM [lottiefiles.com]
          LINKS 
          [https://lottiefiles.com/free-animation/christmas-tenten-wZYnynwpdY - CHRISTMAS_TREE], 
          [https://lottiefiles.com/free-animation/gifts-flying-c1cMVXiII6 - GIFTS], 
          [https://lottiefiles.com/free-animation/snowglobe-after-jignesh-gajjar-D2Eb27C2bt - SNOW_EXTRACTED_FROM_THIS_ANIMATION]
          -->
          <!-- https://lottie.host/d7de9937-2dc4-49ef-a354-b2459bbed38e/pQIyvmw9xw.json COMMENT_OUT -->
          <dotlottie-player class="festival" id="festival" src="https://lottie.host/497c1743-1533-47ad-b6d8-9ed6ebd16b3b/4l3EhpIdKn.json" background="transparent" speed="1" direction="1" playMode="normal" loop autoplay></dotlottie-player>
          <dotlottie-player class="festival2" id="festival2" src="https://lottie.host/3b4dafa1-ffa4-4003-a728-f88542e53074/VAs5OqFEdZ.lottie" background="transparent" speed="1" direction="1" playMode="normal" loop autoplay></dotlottie-player>
          <dotlottie-player class="festival1" id="festival1" src="https://lottie.host/5f7afe43-996b-4b66-a1ce-a0844498d1e5/8WvgvqL0MM.lottie" background="transparent" speed="1" direction="1" playMode="normal" loop="false" autoplay="false"></dotlottie-player>
        `;

        document.body.insertBefore(newDiv, document.body.firstChild);

        const script = document.createElement('script');
        script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
        script.type = 'module';
        document.body.appendChild(script);

        document.getElementById('festiveCorner').style.display = 'block';
        setTimeout(() => {
            document.getElementById('festival').style.opacity = 1;
        }, 400);

        document.getElementById('festival1').addEventListener('click', function() {
          isFestiveClicked = true
          window.open("https://anothermetosee.github.io/Festive/index.html")
          document.getElementById('festival1').style.opacity = 0;
          setTimeout(() => {
              document.getElementById('festival1').style.display = 'none';
          }, 400);
        })

    }
}

handleFestivalDisplay()



/* ---------- CHRISTMAST-HOVER ---------- */

const hoverDiv1 = document.getElementById("festiveCorner");
const targetDiv1 = document.getElementById("targetText");

const isTouchDevice1 = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

let isClicked = false;
let isFestiveClicked = false;

if(today >= startDate && today <= endDate){
  document.getElementById('festiveCorner').addEventListener('click', function() {
    if(isFestiveClicked == true){
      isClicked = false
      isFestiveClicked = false;
    } else {
      isClicked = true
    }
    document.getElementById('festival1').style.display = 'block';
    setTimeout(() => {
        document.getElementById('festival1').style.opacity = 1;
    }, 100);
    const lottiePlayer = document.getElementById('festival1');
    lottiePlayer.stop();
    // setTimeout(() => {
    //   document.getElementById('festival1').style.opacity = 0;
    //   setTimeout(() => {
    //       document.getElementById('festival1').style.display = 'none';
    //   }, 200);
    // }, 1000);
    lottiePlayer.play();
  });
}


if (!isTouchDevice1 && today >= startDate && today <= endDate) {

  hoverDiv1.addEventListener("mouseover", () => {
    if(isClicked == false){
      targetDiv1.style.opacity = 0
      setTimeout(() => {
        targetDiv1.innerHTML = 'Merry Christmas! Click for a Gift🎁';
        targetDiv1.style.scale = 0.85
        targetDiv1.style.opacity = 1
      }, 200);
    } else {
      targetDiv1.style.opacity = 0
      setTimeout(() => {
        targetDiv1.innerHTML = 'Click the Gift to Open!';
        targetDiv1.style.scale = 0.85
        targetDiv1.style.opacity = 1
      }, 200);
    }
  });

} else if(isTouchDevice1 && today >= startDate && today <= endDate) {
  hoverDiv1.addEventListener("click", () => {
    if(isClicked == true){
      targetDiv1.style.opacity = 0
      setTimeout(() => {
        targetDiv1.innerHTML = 'Merry Christmas!';
        targetDiv1.style.scale = 0.85
        targetDiv1.style.opacity = 1
        setTimeout(() => {
          targetDiv1.innerHTML = 'Click the Gift to open it!';
          targetDiv1.style.scale = 0.85
          targetDiv1.style.opacity = 1
        }, 1500);
      }, 200);
      setTimeout(() => {
        targetDiv1.style.opacity = 0
        setTimeout(() => {
          targetDiv1.innerHTML = "Hi, I'm Prashant <span class='wave'>👋</span>";
          targetDiv1.style.scale = 1
          targetDiv1.style.opacity = 1
        }, 200);
      }, 4000);
    }
  });
}

if (!isTouchDevice1 && today >= startDate && today <= endDate) {
  hoverDiv1.addEventListener("mouseover", () => {
    targetDiv1.style.animation = 'diIn 0.5s ease-in-out forwards';
    setTimeout(() => {
      targetDiv1.style.animation = 'diOut 0.5s ease-in-out forwards';
    }, 1500);
  });
  hoverDiv1.addEventListener("mouseout", () => {
    targetDiv1.style.opacity = 0
    setTimeout(() => {
      targetDiv1.innerHTML = "Hi, I'm Prashant <span class='wave'>👋</span>";
      targetDiv1.style.scale = 1
      targetDiv1.style.opacity = 1
    }, 200);
  });
}