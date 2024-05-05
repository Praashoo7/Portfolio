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


const preloadedImage = new Image();
preloadedImage.src = "imgs/me.webp";
preloadedImage.onload = () => {
    const meimg = document.getElementById("meimg");
    meimg.src = preloadedImage.src;
};



/*<!---------------------------------------------------------------------- PROJECT-HOVER-IMAGES ---------------------------------------------------------------------->*/


function setupSlideshow(blockId, lightImages, darkImages) {
  const block = document.getElementById(blockId);
  const image = block.querySelector('.image-wrapper');
  let currentIndex = -1;
  let lastX = 0;
  let timer;

  block.addEventListener("mousemove", function(event) {
      const currentX = event.clientX;
      clearTimeout(timer);
      image.style.transform = `rotate(${currentX > lastX ? -5 : 5}deg)`;
      image.style.animation = "";
      timer = setTimeout(() => image.style.transform = "", 10);
      lastX = currentX;

      if (!image.getAttribute('src')) {
        const currentImages = getCurrentImages();
        image.setAttribute('src', currentImages[0]);
      }
  });

  block.addEventListener('mousemove', function(event) {
      const containerWidth = block.offsetWidth;
      const fixedMarginRight = 50;
      const imageWidth = image.offsetWidth;
      const maxLeftMargin = containerWidth - imageWidth;
      const mouseX = event.pageX - block.getBoundingClientRect().left;
      const marginLeft = Math.min(Math.max(mouseX - (imageWidth / 2), 0), maxLeftMargin - fixedMarginRight);
      image.style.marginLeft = marginLeft + 'px';
  });

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

  document.addEventListener('DOMContentLoaded', resetCurrentIndex);
  document.getElementById('themeswitch-second').addEventListener('click', resetCurrentIndex); // Reset when theme is changed
}

const lightModeImages1 = ["https://praashoo7.github.io/Figma-Front-End/ReadMe-Images/Light_Mode/Login_Light.png", "https://praashoo7.github.io/Figma-Front-End/ReadMe-Images/Light_Mode/HomePage_Light.png", "https://praashoo7.github.io/Figma-Front-End/ReadMe-Images/Light_Mode/AddItemsPage_Light.png", "https://praashoo7.github.io/Figma-Front-End/ReadMe-Images/Light_Mode/Billing_Light.png", "https://praashoo7.github.io/Figma-Front-End/ReadMe-Images/Light_Mode/Sales_Light.png"];
const darkModeImages1 = ["https://praashoo7.github.io/Figma-Front-End/ReadMe-Images/Dark_Mode/Login_Dark1.png", "https://praashoo7.github.io/Figma-Front-End/ReadMe-Images/Dark_Mode/HomePage_Dark.png", "https://praashoo7.github.io/Figma-Front-End/ReadMe-Images/Dark_Mode/AddItemsPage_Dark.png", "https://praashoo7.github.io/Figma-Front-End/ReadMe-Images/Dark_Mode/Billing_Dark.png", "https://praashoo7.github.io/Figma-Front-End/ReadMe-Images/Dark_Mode/Sales_Dark.png"];
const lightModeImages2 = ["https://github.com/Praashoo7/Photo-Gallery-React/blob/main/public/ReadMe-Files/ReadMe_Image1R.png?raw=true", "https://github.com/Praashoo7/Photo-Gallery-React/blob/main/public/ReadMe-Files/ReadMe_Image2R.png?raw=true"];
const darkModeImages2 = ["https://github.com/Praashoo7/Photo-Gallery-React/blob/main/public/ReadMe-Files/ReadMe_Image1R.png?raw=true", "https://github.com/Praashoo7/Photo-Gallery-React/blob/main/public/ReadMe-Files/ReadMe_Image2R.png?raw=true"];
const lightModeImages3 = ["https://praashoo7.github.io/Color-Blindness-Simulator/ReadMe-Images/Color-Blindness-Simulator.png", "https://praashoo7.github.io/Color-Blindness-Simulator/ReadMe-Images/ButtonB.png"];
const darkModeImages3 = ["https://praashoo7.github.io/Color-Blindness-Simulator/ReadMe-Images/Color-Blindness-Simulator.png", "https://praashoo7.github.io/Color-Blindness-Simulator/ReadMe-Images/ButtonB.png"];
const lightModeImages4 = ["https://praashoo7.github.io/Web/ReadMe-Images/1P.png", "https://praashoo7.github.io/Web/ReadMe-Images/2P.png", "https://praashoo7.github.io/Web/ReadMe-Images/1G.png", "https://praashoo7.github.io/Web/ReadMe-Images/2G.png"];
const darkModeImages4 = ["https://praashoo7.github.io/Web/ReadMe-Images/1PD.png", "https://praashoo7.github.io/Web/ReadMe-Images/2PD.png", "https://praashoo7.github.io/Web/ReadMe-Images/1GD.png", "https://praashoo7.github.io/Web/ReadMe-Images/2GD.png"];

setupSlideshow('FFE1', lightModeImages1, darkModeImages1);
setupSlideshow('FFE2', lightModeImages2, darkModeImages2);
setupSlideshow('FFE3', lightModeImages3, darkModeImages3);
setupSlideshow('FFE4', lightModeImages4, darkModeImages4);