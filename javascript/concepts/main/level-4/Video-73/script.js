// let date = new Date()
//   let h = date.getHours();
//   let m = date.getMinutes();
//   let s = date.getSeconds();
//   let dd = date.getDate()
//   let mm = date.getMonth()
//   let yy = date.getFullYear()

// const show = document.querySelector(".box2");
// const container = document.querySelector(".container");

// show.addEventListener("click", () => {
//     container.style.display = "flex";
// });

// const btn1 = document.querySelector(".btn1");
// btn1.addEventListener("click", (e) => {
//     e.preventDefault();
//     let titlec = todo_title.value;
//     let taskc = todo_task.value;

//     let tasks = JSON.parse(localStorage.getItem("todo")) || [];

//     tasks.push([titlec, taskc]);

//     localStorage.setItem("todo", JSON.stringify(tasks));

//     // Create a new card to display the task
    
//     const card_container = document.querySelector(".card_container");
//     const newCard = document.createElement("div");
//     newCard.classList.add("card");
//     newCard.innerHTML = `
//         <div class="card_box">
//             <div class="card_title">${titlec}</div>
//             <hr width="100%" size="2" color="purple">
//             <div class="card_detail">${taskc}</div>
//             <div class="card_button">
//             <div class="time">${h}:${m}:${s}</div>
//                     <div class="date">${dd} / ${mm} / ${yy}</div>
//                 <button type="button" class="card_btn">Delete</button>
//             </div>
//         </div>
//     `;

//     card_container.insertBefore(newCard, card_container.firstChild);
//     // card_container.appendChild(newCard);

//     // Add the delete event listener to the new "Delete" button
//     const delbtn = newCard.querySelector(".card_btn")
    
//     delbtn.addEventListener("click", () => {
//         // Remove the task from the DOM
//         newCard.remove();

//         // Remove the task from localStorage
//         removeTaskFromLocalStorage(titlec, taskc);
//     });

//     todo_title.value = "";
//     todo_task.value = "";
    
//     const container = document.querySelector(".container");
//     container.style.display = 'none';

// });

// const btn2 = document.querySelector(".btn2");
// btn2.addEventListener("click", (e) => {
//     container.style.display = "none";
// });

// // Load tasks from localStorage when the page is refreshed
// window.addEventListener("DOMContentLoaded", () => {
//     const tasks = JSON.parse(localStorage.getItem("todo")) || [];
//     const card_container = document.querySelector(".card_container");

//     // Display all tasks from localStorage
//     tasks.forEach((task) => {
//         const [titlec, taskc] = task;
//         const card = document.createElement("div");
//         card.classList.add("card");
//         card.innerHTML = `
//             <div class="card_box">
//                 <div class="card_title">${titlec}</div>
//                 <hr width="100%" size="2" color="purple">
//                 <div class="card_detail">${taskc}</div>
//                 <div class="card_button">
//                     <div class="time">${h}:${m}:${s}</div>
//                     <div class="date">${dd} / ${mm} / ${yy}</div>
//                     <button type="button" class="card_btn">Delete</button>
//                 </div>
//             </div>
//         `;
//         card_container.appendChild(card);

//         // Add the delete event listener to each "Delete" button
//         const delbtn2 = card.querySelector(".card_btn");
//         delbtn2.addEventListener("click", () => {
//             card.remove();
//             removeTaskFromLocalStorage(titlec, taskc);
//         });
//     });
// });

// // Function to remove the task from localStorage
// function removeTaskFromLocalStorage(titlec, taskc) {
//     let tasks = JSON.parse(localStorage.getItem("todo")) || [];

//     // Filter out the task that matches titlec and taskc
//     tasks = tasks.filter((task) => {
//         task[0] !== titlec || task[1] !== taskc
//     });

//     // Save the updated task list back to localStorage
//     localStorage.setItem("todo", JSON.stringify(tasks));
// }


let date = new Date()
let h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds();
let dd = date.getDate()
let mm = date.getMonth()
let yy = date.getFullYear()

const show = document.querySelector(".box2");
const container = document.querySelector(".container");

show.addEventListener("click", () => {
    container.style.display = "flex";
});

const btn1 = document.querySelector(".btn1");
btn1.addEventListener("click", (e) => {
    e.preventDefault();
    let titlec = todo_title.value;
    let taskc = todo_task.value;

    let tasks = JSON.parse(localStorage.getItem("todo")) || [];

    // Get the current date and time when the task is added
    let date = new Date();
    let timestamp = date.toISOString(); // Save the timestamp
    console.log(timestamp)
    tasks.push([titlec, taskc, timestamp]);

    localStorage.setItem("todo", JSON.stringify(tasks));

    // Create a new card to display the task
    const card_container = document.querySelector(".card_container");
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.innerHTML = `
        <div class="card_box">
            <div class="card_title">${titlec}</div>
            <hr width="100%" size="2" color="purple">
            <div class="card_detail">${taskc}</div>
            <div class="card_button">
                <div class="time">${formatTime(timestamp)}</div>
                <div class="date">${formatDate(timestamp)}</div>
                <button type="button" class="card_btn">Delete</button>

            </div>
        </div>
    `;

    card_container.appendChild(newCard);
    // card_container.insertBefore(newCard, card_container.firstChild);

    // Add the delete event listener to the new "Delete" button
    const delbtn = newCard.querySelector(".card_btn")
    
    delbtn.addEventListener("click", () => {
        newCard.remove();
        removeTaskFromLocalStorage(titlec, taskc);
    });

    todo_title.value = "";
    todo_task.value = "";
    
    const container = document.querySelector(".container");
    container.style.display = 'none';

});



const btn2 = document.querySelector(".btn2");
btn2.addEventListener("click", (e) => {
    container.style.display = "none";
});

// Load tasks from localStorage when the page is refreshed
window.addEventListener("DOMContentLoaded", () => {
    const tasks = JSON.parse(localStorage.getItem("todo")) || [];
    const card_container = document.querySelector(".card_container");

    tasks.forEach((task) => {
        const [titlec, taskc, timestamp] = task;  // Destructure to get the timestamp
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <div class="card_box">
                <div class="card_title">${titlec}</div>
                <hr width="100%" size="2" color="purple">
                <div class="card_detail">${taskc}</div>
                <div class="card_button">
                    <div class="time">${formatTime(timestamp)}</div>
                    <div class="date">${formatDate(timestamp)}</div>
                    <button type="button" class="card_btn">Delete</button>
                </div>
            </div>
        `;
        card_container.appendChild(card);
        // card_container.insertBefore(newCard, card_container.firstChild);

        const delbtn2 = card.querySelector(".card_btn");
        delbtn2.addEventListener("click", () => {
            card.remove();
            removeTaskFromLocalStorage(titlec, taskc);
        });
    });
});

// Function to remove the task from localStorage
function removeTaskFromLocalStorage(titlec, taskc) {
    let tasks = JSON.parse(localStorage.getItem("todo")) || [];

    // Filter out the task that matches titlec and taskc
    tasks = tasks.filter((task) => {
        return !(task[0] === titlec && task[1] === taskc);
    });

    localStorage.setItem("todo", JSON.stringify(tasks));
}

// Function to format the time (hh:mm:ss)
function formatTime(timestamp) {
    let date = new Date(timestamp);
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    return `${h}:${m}:${s}`;
}

// Function to format the date (dd / mm / yyyy)
function formatDate(timestamp) {
    let date = new Date(timestamp);
    let dd = date.getDate();
    let mm = date.getMonth() + 1; // Months are zero-based
    let yy = date.getFullYear();
    return `${dd} / ${mm} / ${yy}`;
}

