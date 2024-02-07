
const todos = JSON.parse(localStorage.getItem("todos")) || [];

const showModal = document.querySelector(".modal-box");
const showBtn = document.querySelector(".btn-add");
const applyBtn = document.querySelector(".apply");
const cancelBtn = document.querySelector(".cancel");
const overlay = document.querySelector(".overlay");

// MODAL PAGE 
showBtn.addEventListener("click", () => {
  showModal.classList.add("active");
  overlay.classList.add("active");
});

cancelBtn.addEventListener("click", () => {
  showModal.classList.remove("active");
  overlay.classList.remove("active");
});

applyBtn.addEventListener("click", () => {  
  // Input'tan değeri al
  const inputValue = document.getElementById("myInput").value;
  let isCompleted = false;
  todos.push({text: inputValue, completed: isCompleted });

  // Local storage'a ekle
  updateLocalStorage();

  // Boş değer kontrolü
  if (inputValue.trim() !== '') {

    // Yeni bir <li> öğesi oluştur
    const li = document.createElement("li");
    const textNode = document.createTextNode(inputValue);
    li.appendChild(textNode);
  
    // Todo listesine ekle
    document.getElementById("todoList").appendChild(li);
  
    // Input'u temizle
    document.getElementById("myInput").value = '';    
  
    // Modal ve overlayı kapat 
    showModal.classList.remove("active");
    overlay.classList.remove("active");
  } else {
    alert("You must write something!");
    // document.getElementsByClassName("container")[0].innerHTML= `<p>Not gir</p>`
  }
});

// Dark Mode Function
function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

// Local storage'ı güncelle
function updateLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}


// Local storage'dan değeri sil
// function removeFromLocalStorage(value) {
//   const todos = JSON.parse(localStorage.getItem("todos"));
//   const filteredTodos = todos.filter(todo => todo !== value);
//   localStorage.setItem("todos", JSON.stringify(filteredTodos));
// }