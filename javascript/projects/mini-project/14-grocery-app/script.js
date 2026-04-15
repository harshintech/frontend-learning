const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

form.addEventListener("submit", addItem);

// edit option
let editElement;
let editFlag = false;
let editID = "";

function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();

  if (value !== "" && !editFlag) {
    const element = document.createElement("article");
    let attr = document.createAttribute("data-id");

    attr.value = id;
    element.setAttributeNode(attr); //Give data-id to Article Element
    element.classList.add("grocery-item"); //Give class to Article Element
    element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">

              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>

              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;

    //add Evetn Listner to Both Button
    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteItem);
    const editBtn = element.querySelector(".edit-btn");
    editBtn.addEventListener("click", editItem);

    list.appendChild(element);
    displayAlert("item added to the list", "success");
    container.classList.add("show-container");
    addToLocalStorage(id, value);
    setBackToDefault();
  } else if (value !== "" && editFlag) {
    editElement.innerHTML = value;
    displayAlert("value changed", "success");

    // edit  local storage
    editLocalStorage(editID, value);
    setBackToDefault();
  } else {
    displayAlert("please enter value", "danger");
  }
}

// Function

function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}

function deleteItem(e) {
  console.log(e.currentTarget);
  const element = e.currentTarget.parentElement.parentElement;
  console.log(element);
  const id = element.dataset.id;

  list.removeChild(element);

  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }

  displayAlert("item removed", "danger");

  setBackToDefault();
  //   // remove from local storage
  removeFromLocalStorage(id);
}

function displayAlert(alertmsg, action) {
  alert.textContent = alertmsg;
  alert.classList.add(`alert-${action}`);
  // remove alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

clearBtn.addEventListener("click", clearItem);

function clearItem() {
  const items = document.querySelector(".grocery-list");
  console.log(items);
  items.innerHTML = "";
  container.classList.remove("show-container");
  displayAlert("empty list", "danger");
  setBackToDefault();
  localStorage.removeItem("list");
}

function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;
  console.log(element);
  grocery.value = editElement.innerHTML;
  console.log(grocery);
  editFlag = true;
  editID = element.dataset.id;
  submitBtn.textContent = "edit";
}

//Local Storage

function addToLocalStorage(id, value) {
  const grocery = { id, value };
  let items = getLocalStorage();
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

function editLocalStorage(id, value) {
  let items = getLocalStorage();

  //give new array with items
  items = items.map((item) => {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });

  localStorage.setItem("list", JSON.stringify(items));
}

function removeFromLocalStorage(id, value) {
  let items = getLocalStorage();

  items = items.filter((item) => {
    if (item.id !== id) {
      return item;
    }
  });

  //Here we simply over-write value.
  localStorage.setItem("list", JSON.stringify(items));
}

function setupItems() {
  let items = getLocalStorage();

  if (items.length > 0) {
    items.forEach(function (item) {
      createListItem(item.id, item.value);
    });
    container.classList.add("show-container");
  }
}

function createListItem(id, value) {
  const element = document.createElement("article");
  let attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.classList.add("grocery-item");
  element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;
  // add event listeners to both buttons;
  const deleteBtn = element.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", deleteItem);
  const editBtn = element.querySelector(".edit-btn");
  editBtn.addEventListener("click", editItem);

  // append child
  list.appendChild(element);
}

window.addEventListener("DOMContentLoaded", setupItems);
