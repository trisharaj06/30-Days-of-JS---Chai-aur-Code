// Activity 1 - Basic Event Handling
//Task 1
document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("para").textContent = "Text updated";
});
// Task 2
let img = document.getElementsByTagName("img")[0];
img.addEventListener("dblclick", () => {
  console.log("dbl click");
  if (img.style.display == "none") {
    img.style.display = "block";
  } else img.style.display = "none";
});

// Activity 2 - Mouse Events
//Task 3
let div = document.getElementById("div1");
div.addEventListener("mouseover", () => {
  div.style.backgroundColor = "lightgrey";
});

//Task 4
div.addEventListener("mouseout", () => {
  div.style.backgroundColor = "";
});

//Activity 3 - Keyboard Events
//Task 5
let input = document.getElementById("inp");
input.addEventListener("keydown", (event) => {
  console.log(event.key);
});
//Task 6
input.addEventListener("keyup", (e) => {
  document.getElementById("display").innerText = "Input value : " + input.value;
});

// Activity 4 - Form Events
//Task 7
const form = document.getElementById("myForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  document.getElementById(
    "output"
  ).innerHTML = `Name: ${name} <br> Email: ${email}`;
});

//Task 8
const selectEle = document.getElementById("mySelect");
selectEle.addEventListener("change", () => {
  document.getElementById("selectedValue").innerText =
    "selected value is : " + selectEle.value;
});

// Activity 5 - Event Delegation
//Task 9
const list = document.getElementById("my-list");

list.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log(event.target.textContent);
  }
});
//Task 10
