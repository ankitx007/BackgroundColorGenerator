//BgColor Dynamically Changing
function myColor() {
  var red = document.getElementById("red").value;
  var green = document.getElementById("green").value;
  var blue = document.getElementById("blue").value;
  var opacity = document.getElementById("opacity").value / 10;
  var Box = document.getElementById("Box");
  var Bgn = document.querySelectorAll(".tabPanel");
  var button = document.getElementById("background");
  var color = "rgba(" + red + ", " + green + "," + blue + "," + opacity + ")";

  button.style.backgroundColor = color;
  Bgn[0].style.backgroundColor = color;
  // document.body.style.backgroundColor =color;
  Box.value = color;
}

document.getElementById("red").addEventListener("input", myColor);
document.getElementById("green").addEventListener("input", myColor);
document.getElementById("blue").addEventListener("input", myColor);
document.getElementById("opacity").addEventListener("input", myColor);

//Copy Function
function myCopy() {
  var copyText = document.getElementById("Box");
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
  copyText.classList.toggle("animate__headShake");
}

document.getElementById("Box").addEventListener("click", myCopy);

function myCopygradient() {
  var copyText = document.getElementsByClassName("Box")[0];
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
  copyText.classList.toggle("animate__headShake");
}
document
  .getElementsByClassName("Box")[0]
  .addEventListener("click", myCopygradient);

//Tabs
var bgrndbtn = document.getElementById("background");
var grdntbtn = document.getElementById("gradient");
var tabPanels = document.querySelectorAll(".tabContainer  .tabPanel");

function showPanel(panelIndex) {
  grdntbtn.style.boxShadow = "inset 0px -10px 20px 2px rgba(0, 0, 0, 0.25)";
  bgrndbtn.style.boxShadow = "none";

  bgrndbtn.addEventListener("click", () => {
    tabPanels[0].classList.add("animate__fadeInLeft");
    grdntbtn.style.boxShadow = "inset 0px -10px 20px 2px rgba(0, 0, 0, 0.25)";
    bgrndbtn.style.boxShadow = "none";
  });
  grdntbtn.addEventListener("click", () => {
    tabPanels[1].classList.add("animate__fadeInRight");
    bgrndbtn.style.boxShadow = "inset 0px -10px 20px 2px rgba(0, 0, 0, 0.25)";
    grdntbtn.style.boxShadow = "none";
  });

  tabPanels.forEach(function (node) {
    node.style.display = "none";
  });
  tabPanels[panelIndex].style.display = "flex";
}
showPanel(0);

//Gradient
function myGradient() {
  var red1 = document.getElementById("red1").value;
  var green1 = document.getElementById("green1").value;
  var blue1 = document.getElementById("blue1").value;
  var opacity1 = document.getElementById("opacity1").value / 10;

  var red2 = document.getElementById("red2").value;
  var green2 = document.getElementById("green2").value;
  var blue2 = document.getElementById("blue2").value;
  var opacity2 = document.getElementById("opacity2").value / 10;

  var angle = document.getElementById("angle");
  var Box = document.querySelector(".Box");
  var button = document.getElementById("gradient");
  var Bg = document.getElementById("GradientPanel");

  var color =
    "linear-gradient(" +
    angle.value +
    "deg, rgba(" +
    red1 +
    ", " +
    green1 +
    "," +
    blue1 +
    "," +
    opacity1 +
    "), rgba(" +
    red2 +
    ", " +
    green2 +
    "," +
    blue2 +
    "," +
    opacity2 +
    "))";

  button.style.background = color;
  document.body.style.backgroundImage = color;
  Box.value = color;
}

document.getElementById("red1").addEventListener("input", myGradient);
document.getElementById("green1").addEventListener("input", myGradient);
document.getElementById("blue1").addEventListener("input", myGradient);
document.getElementById("opacity1").addEventListener("input", myGradient);

document.getElementById("red2").addEventListener("input", myGradient);
document.getElementById("green2").addEventListener("input", myGradient);
document.getElementById("blue2").addEventListener("input", myGradient);
document.getElementById("opacity2").addEventListener("input", myGradient);

document.getElementById("angle").addEventListener("input", myGradient);

//Hamburger

const hamburger = document.querySelector(".hamburger");
const buttoncontainer = document.querySelector(".buttoncontainer");

document.onclick = function (e) {
  if (e.target.id !== "buttoncontainer" && e.target.id !== "hamburger") {
    hamburger.classList.remove("active");
    buttoncontainer.classList.remove("active");
  }
};

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  buttoncontainer.classList.toggle("active");
});
