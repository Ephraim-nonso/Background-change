const whiteCircle = document.querySelector(".white");
const redCircle = document.querySelector(".red");
const yellowCircle = document.querySelector(".yellow");
const greenCircle = document.querySelector(".green");
const bodyBackground = document.querySelector("body");

whiteCircle.addEventListener("click", evt => bodyBackground.style.backgroundColor = "white");
redCircle.addEventListener("click", evt => bodyBackground.style.backgroundColor = "red");
yellowCircle.addEventListener("click", evt => bodyBackground.style.backgroundColor = "yellow");
greenCircle.addEventListener("click", evt => bodyBackground.style.backgroundColor = "green");
