/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if(menuBtn){

  menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");

    menuBtn.textContent =
      mobileMenu.classList.contains("open")
      ? "✕"
      : "☰";

  });

}


/* =========================
   DARK / LIGHT MODE
========================= */

const themeBtn =
  document.getElementById("themeBtn");

if(localStorage.getItem("theme") === "light"){

  document.body.classList.add("light");

}

function updateTheme(){

  if(!themeBtn) return;

  themeBtn.textContent =
    document.body.classList.contains("light")
    ? "☾"
    : "☼";

}

updateTheme();

if(themeBtn){

  themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    localStorage.setItem(
      "theme",
      document.body.classList.contains("light")
      ? "light"
      : "dark"
    );

    updateTheme();

  });

}


/* =========================
   TYPING ANIMATION
========================= */

const typingText =
  document.getElementById("typingText");

if(typingText){

  const words = [

    "Soil Science Student.",
    "Technology Explorer.",
    "Curious Learner.",
    "Future Builder."

  ];

  let wordIndex = 0;
  let letterIndex = 0;
  let deleting = false;


  function typing(){

    const word = words[wordIndex];

    if(!deleting){

      typingText.textContent =
        word.substring(
          0,
          letterIndex + 1
        );

      letterIndex++;

      if(letterIndex === word.length){

        deleting = true;

        setTimeout(typing,1000);

        return;

      }

    }else{

      typingText.textContent =
        word.substring(
          0,
          letterIndex - 1
        );

      letterIndex--;

      if(letterIndex === 0){

        deleting = false;

        wordIndex =
          (wordIndex + 1)
          % words.length;

      }

    }

    setTimeout(
      typing,
      deleting ? 45 : 80
    );

  }

  typing();

}


/* =========================
   AGE CALCULATOR
========================= */

const birthDate =
  new Date(
    2007,
    0,
    25,
    0,
    0,
    0
  );


function calculateAge(){

  const now = new Date();

  let years =
    now.getFullYear()
    - birthDate.getFullYear();

  let months =
    now.getMonth()
    - birthDate.getMonth();

  let days =
    now.getDate()
    - birthDate.getDate();


  if(days < 0){

    months--;

    days +=
      new Date(
        now.getFullYear(),
        now.getMonth(),
        0
      ).getDate();

  }


  if(months < 0){

    years--;

    months += 12;

  }


  const ageYears =
    document.getElementById(
      "ageYears"
    );

  const ageDetails =
    document.getElementById(
      "ageDetails"
    );


  if(ageYears){

    ageYears.textContent =
      years;

  }


  const totalSeconds =
    Math.floor(
      (now - birthDate) / 1000
    );


  const seconds =
    totalSeconds % 60;

  const minutes =
    Math.floor(totalSeconds / 60)
    % 60;

  const hours =
    Math.floor(totalSeconds / 3600)
    % 24;


  if(ageDetails){

    ageDetails.textContent =
      `${months} months • ${days} days • ${hours}h ${minutes}m ${seconds}s`;

  }

}


calculateAge();

setInterval(
  calculateAge,
  1000
);


/* =========================
   BIRTHDAY COUNTDOWN
========================= */

function birthdayCountdown(){

  const now = new Date();

  let nextBirthday =
    new Date(
      now.getFullYear(),
      0,
      25,
      0,
      0,
      0
    );


  if(now >= nextBirthday){

    nextBirthday.setFullYear(
      nextBirthday.getFullYear() + 1
    );

  }


  let remaining =
    Math.floor(
      (nextBirthday - now) / 1000
    );


  const days =
    Math.floor(
      remaining / 86400
    );

  remaining %= 86400;


  const hours =
    Math.floor(
      remaining / 3600
    );

  remaining %= 3600;


  const minutes =
    Math.floor(
      remaining / 60
    );

  const seconds =
    remaining % 60;


  const countdown =
    document.getElementById(
      "birthdayCountdown"
    );


  if(countdown){

    countdown.textContent =
      `${days}d ${hours}h ${minutes}m ${seconds}s`;

  }

}


birthdayCountdown();

setInterval(
  birthdayCountdown,
  1000
);


/* =========================
   FUN BUTTONS
========================= */

const funMessages = {

  curious: [

    "Curiosity detected. 👀",

    "You clicked. I knew you would. 😂",

    "Okay detective... what are you looking for?"

  ],

  bored: [

    "Bored? Try the Hobbies page. 😄",

    "Maybe the Gallery can save you.",

    "Go explore the website!"

  ],

  dont: [

    "You were literally told NOT to click. 😂",

    "Congratulations. You ignored instructions.",

    "Nothing exploded. For now. 😎"

  ]

};


const funButtons =
  document.querySelectorAll(
    "[data-message]"
  );

const funMessage =
  document.getElementById(
    "funMessage"
  );


funButtons.forEach(button => {

  button.addEventListener(
    "click",
    () => {

      const type =
        button.dataset.message;

      const messages =
        funMessages[type];

      const random =
        messages[
          Math.floor(
            Math.random()
            * messages.length
          )
        ];


      if(funMessage){

        funMessage.textContent =
          random;

      }

    }
  );

});


/* =========================
   YEAR
========================= */

const year =
  document.getElementById("year");

if(year){

  year.textContent =
    new Date().getFullYear();

    }
