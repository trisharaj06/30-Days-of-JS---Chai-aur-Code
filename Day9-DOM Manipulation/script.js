//Activity 1 - selecting and manipuulating elements
//Task 1
let head_id = document.getElementById("head-id");
head_id.textContent = "Updated content of Heading";
console.log(head_id.textContent);

//Task 2
let head_class = document.getElementsByClassName("head-class")[0];
head_class.style.backgroundColor = "aqua";

// Activity 2 - creating and appending elements
//Task 3
const newdiv = document.createElement("div");
newdiv.innerText = "Div element created";
document.body.appendChild(newdiv);

//Task 4
const newList = document.createElement("li");
newList.innerText = "water";
document.getElementsByTagName("ul")[0].appendChild(newList);

//Activity 3 - Removing Elements
//Task 5
const ele = document.getElementById("para");
ele.remove();

// Task 6
document.getElementsByTagName("ul")[0].lastChild.remove();

// Activity 4 - Modifying attributes and classes
// Task 7
let myele = document.querySelector("input");
myele.value = "click";
myele.setAttribute("type", "button");

//Task 8
head_class.classList.remove("head-class");
head_class.classList.add("add-class");

// Activity 5 - Event Handling
// Task 9
document.getElementById("mybtn").addEventListener("click", changeContent);
function changeContent() {
  document.getElementById("para2").textContent = "New paragraph";
}

// Task 10
let btn = document.getElementById("mybtn");
btn.addEventListener("mouseover", changeBorder);
function changeBorder() {
  console.log("over");
  document.getElementById("para2").style.border = "2px solid red";
}
btn.addEventListener("mouseout", removeBorder);
function removeBorder() {
  document.getElementById("para2").style.border = null;
}
