document.addEventListener("DOMContentLoaded", function () {


/* =========================
   MOBILE MENU
========================= */

const menuBtn =
document.getElementById("menuBtn");

const mobileMenu =
document.getElementById("mobileMenu");


if (menuBtn && mobileMenu) {

menuBtn.addEventListener("click", function () {

mobileMenu.classList.toggle("open");

if (mobileMenu.classList.contains("open")) {

menuBtn.textContent = "✕";

} else {

menuBtn.textContent = "☰";

}

});


const mobileLinks =
mobileMenu.querySelectorAll("a");


mobileLinks.forEach(function (link) {

link.addEventListener("click", function () {

mobileMenu.classList.remove("open");

menuBtn.textContent = "☰";

});

});

}



/* =========================
   DARK / LIGHT MODE
========================= */

const themeBtn =
document.getElementById("themeBtn");


const savedTheme =
localStorage.getItem("saimoon-theme");


if (savedTheme === "light") {

document.body.classList.add("light");

}


function updateThemeIcon() {

if (!themeBtn) return;


if (
document.body.classList.contains("light")
) {

themeBtn.textContent = "🌙";

} else {

themeBtn.textContent = "☀️";

}

}


updateThemeIcon();


if (themeBtn) {

themeBtn.addEventListener("click", function () {

document.body.classList.toggle("light");


if (
document.body.classList.contains("light")
) {

localStorage.setItem(
"saimoon-theme",
"light"
);

} else {

localStorage.setItem(
"saimoon-theme",
"dark"
);

}


updateThemeIcon();

});

}



/* =========================
   FOOTER YEAR
========================= */

const year =
document.getElementById("year");


if (year) {

year.textContent =
new Date().getFullYear();

}



/* =========================
   TYPING ANIMATION
========================= */

const typing =
document.getElementById("typing");


if (typing) {

const words = [

"Soil Science Student",

"Technology Enthusiast",

"Curious Learner",

"Future Problem Solver"

];


let wordIndex = 0;

let charIndex = 0;

let deleting = false;


function typeEffect() {

const word =
words[wordIndex];


if (!deleting) {

typing.textContent =
word.substring(0, charIndex);

charIndex++;


if (charIndex > word.length) {

deleting = true;

setTimeout(typeEffect, 1200);

return;

}

} else {

typing.textContent =
word.substring(0, charIndex);

charIndex--;


if (charIndex < 0) {

deleting = false;

wordIndex =
(wordIndex + 1) % words.length;

charIndex = 0;

}

}


setTimeout(
typeEffect,
deleting ? 45 : 85
);

}


typeEffect();

}



/* =========================
   AGE COUNTER
   DOB:
   25 JANUARY 2007
   TIME ASSUMED 00:00
========================= */

const dob =
new Date(
2007,
0,
25,
0,
0,
0
);


function updateAge() {

const now =
new Date();


let years =
now.getFullYear()
-
dob.getFullYear();


const birthdayThisYear =
new Date(
now.getFullYear(),
0,
25
);


if (now < birthdayThisYear) {

years--;

}


const lastBirthday =
new Date(
dob.getFullYear() + years,
0,
25
);


let months =
now.getMonth()
-
lastBirthday.getMonth();


if (months < 0) {

months += 12;

}


const monthAnchor =
new Date(lastBirthday);


monthAnchor.setMonth(
monthAnchor.getMonth() + months
);


const days =
Math.floor(
(
now - monthAnchor
) /
86400000
);


const totalSeconds =
Math.floor(
(
now - dob
) /
1000
);


const totalMinutes =
Math.floor(
totalSeconds / 60
);


const totalHours =
Math.floor(
totalMinutes / 60
);


const ageYears =
document.getElementById(
"ageYears"
);


const ageMonths =
document.getElementById(
"ageMonths"
);


const ageDays =
document.getElementById(
"ageDays"
);


const ageHours =
document.getElementById(
"ageHours"
);


const ageMinutes =
document.getElementById(
"ageMinutes"
);


const ageSeconds =
document.getElementById(
"ageSeconds"
);


if (ageYears)
ageYears.textContent = years;


if (ageMonths)
ageMonths.textContent = months;


if (ageDays)
ageDays.textContent = days;


if (ageHours)
ageHours.textContent =
totalHours.toLocaleString();


if (ageMinutes)
ageMinutes.textContent =
totalMinutes.toLocaleString();


if (ageSeconds)
ageSeconds.textContent =
totalSeconds.toLocaleString();

}


updateAge();

setInterval(
updateAge,
1000
);



/* =========================
   BIRTHDAY COUNTDOWN
========================= */

function updateCountdown() {

const now =
new Date();


let nextBirthday =
new Date(
now.getFullYear(),
0,
25,
0,
0,
0
);


if (now >= nextBirthday) {

nextBirthday =
new Date(
now.getFullYear() + 1,
0,
25,
0,
0,
0
);

}


let difference =
nextBirthday - now;


let days =
Math.floor(
difference / 86400000
);


difference %= 86400000;


let hours =
Math.floor(
difference / 3600000
);


difference %= 3600000;


let minutes =
Math.floor(
difference / 60000
);


difference %= 60000;


let seconds =
Math.floor(
difference / 1000
);


const cdDays =
document.getElementById(
"cdDays"
);


const cdHours =
document.getElementById(
"cdHours"
);


const cdMinutes =
document.getElementById(
"cdMinutes"
);


const cdSeconds =
document.getElementById(
"cdSeconds"
);


if (cdDays)
cdDays.textContent = days;


if (cdHours)
cdHours.textContent = hours;


if (cdMinutes)
cdMinutes.textContent = minutes;


if (cdSeconds)
cdSeconds.textContent = seconds;

}


updateCountdown();

setInterval(
updateCountdown,
1000
);



/* =========================
   FUN BUTTONS
========================= */

const messages = {

bored: [

"Bored? Go explore the Hobbies page. 😎",

"Your boredom has been detected. System recommends snacks. 😂",

"Try clicking another button. That's basically productivity, right?"

],


curious: [

"Curiosity level: 100%. Respect. 👀",

"You clicked because you HAD to know, didn't you? 😂",

"Congratulations. Curiosity remains undefeated."

],


dont: [

"You were specifically told not to click. 😭",

"Rules are apparently just suggestions today. 😂",

"Okay... I saw that. 👀"

],


mood: [

"Current mood: 50% student, 30% gamer, 20% overthinking. 🎮",

"Mood.exe is running normally. 😌",

"Status: peacefully confused. 😂"

],


secret: [

"Congratulations! You found absolutely nothing. 😂",

"Secret unlocked: there is no secret. 🤫",

"Top secret information: you clicked a button."

]

};


const funButtons =
document.querySelectorAll(
"[data-fun]"
);


funButtons.forEach(function (button) {

button.addEventListener(
"click",
function () {

const type =
button.dataset.fun;


const list =
messages[type];


const result =
document.getElementById(
"funResult"
);


if (!result) return;


const random =
Math.floor(
Math.random() * list.length
);


result.textContent =
list[random];


});

});


});
