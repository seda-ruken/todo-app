// Dropdown Function 
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
// Close the dropdown 
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Dark Mode Function
function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

// MODAL PAGE 
const showModal = document.querySelector(".modal-box"),
  // overlay = document.querySelector(".overlay"),
  showBtn = document.querySelector(".btn-add"),
  applyBtn = document.querySelector(".apply"),
  cancelBtn = document.querySelector(".cancel");

  // overlay.addEventListener("click"), () => showModal.classList.remove("active");
  showBtn.addEventListener("click", () => showModal.classList.add("active"));
  cancelBtn.addEventListener("click", () => showModal.classList.remove("active"));
  applyBtn.addEventListener("click", () => showModal.classList.remove("active"));

// ADD TODO
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  span.className = "close";
  span.classList.add("close"); 
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  span.className = "close";
  span.classList.add("close"); 
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElemen
      div.style.display = "none";
    }
  }
}