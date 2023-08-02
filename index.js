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


function reveal() {
  var reveals = document.querySelectorAll(".reveal");

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