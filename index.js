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
      .catch((err)=>console.log(err));
      } else {
        b.innerHTML = "Hi "+n+", Please check your Internet Connection.";
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
  const val = [dayWeek[dayName], dayNum + getDaySuffix(dayNum), "September", year];
  for (let i = 0; i < IDCollection.length; i++) {
    document.getElementById(IDCollection[i]).firstChild.nodeValue = val[i];
  }
}

updateDate();


/*<!---------------------------------------------------------------------- MAIL-TO ---------------------------------------------------------------------->*/


function mailDefault(){
  var email = "praashme@gmail.com";
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


/*<!---------------------------------------------------------------------- IMAGE-HOVER ---------------------------------------------------------------------->*/


/* Store the element in el */
let el = document.getElementById('tilt')

/* Get the height and width of the element */
const height = el.clientHeight
const width = el.clientWidth

/*
  * Add a listener for mousemove event
  * Which will trigger function 'handleMove'
  * On mousemove
  */
el.addEventListener('mousemove', handleMove)

/* Define function a */
function handleMove(e) {
  /*
    * Get position of mouse cursor
    * With respect to the element
    * On mouseover
    */
  /* Store the x position */
  const xVal = e.layerX
  /* Store the y position */
  const yVal = e.layerY
  
  /*
    * Calculate rotation valuee along the Y-axis
    * Here the multiplier 20 is to
    * Control the rotation
    * You can change the value and see the results
    */
  const yRotation = 5 * ((xVal - width / 2) / width)
  
  /* Calculate the rotation along the X-axis */
  const xRotation = -5 * ((yVal - height / 2) / height)
  
  /* Generate string for CSS transform property */
  const string = 'perspective(500px) scale(1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
  
  /* Apply the calculated transformation */
  el.style.transform = string
}

/* Add listener for mouseout event, remove the rotation */
el.addEventListener('mouseout', function() {
  el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})

/* Add listener for mousedown event, to simulate click */
el.addEventListener('mousedown', function() {
  el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
})

/* Add listener for mouseup, simulate release of mouse click */
el.addEventListener('mouseup', function() {
  el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})


/*<!---------------------------------------------------------------------- SCROLL-ANIMATIONS ---------------------------------------------------------------------->*/


function reveal00() {
  var reveals = document.querySelectorAll(".reveal00");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal00);
window.addEventListener("DOMContentLoaded", reveal00);

function reveal01() {
  var reveals = document.querySelectorAll(".reveal01");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal01);
window.addEventListener("DOMContentLoaded", reveal01);

function reveal02() {
  var reveals = document.querySelectorAll(".reveal02");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal02);
window.addEventListener("DOMContentLoaded", reveal02);

function reveal03() {
  var reveals = document.querySelectorAll(".reveal03");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal03);
window.addEventListener("DOMContentLoaded", reveal03);

function reveal04() {
  var reveals = document.querySelectorAll(".reveal04");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal04);
window.addEventListener("DOMContentLoaded", reveal04);


function revealM() {
  var reveals = document.querySelectorAll(".revealM");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = -100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", revealM);
window.addEventListener("DOMContentLoaded", revealM);


function revealC() {
  var reveals = document.querySelectorAll(".revealC");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = -10;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", revealC);
window.addEventListener("DOMContentLoaded", revealC);


function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
window.addEventListener("DOMContentLoaded", reveal);


function reveal1() {
  var reveals = document.querySelectorAll(".reveal1");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 90;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal1);
window.addEventListener("DOMContentLoaded", reveal1);


function reveal11() {
  var reveals = document.querySelectorAll(".reveal11");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 90;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal11);
window.addEventListener("DOMContentLoaded", reveal11);

function reveal111() {
  var reveals = document.querySelectorAll(".reveal111");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal111);
window.addEventListener("DOMContentLoaded", reveal111);


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
preloadedImage.src = "imgs/me.jpg";
preloadedImage.onload = () => {
    const meimg = document.getElementById("meimg");
    meimg.src = preloadedImage.src;
};