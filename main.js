/* Dropdown Function */
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
