const taskinput = document.getElementById("task-input");
const taskform = document.getElementById("task-form");
const tasklist = document.getElementById("task-list");

taskform.addEventListener("submit", (e) => {
  e.preventDefault;
  const tasktitle = taskinput.value;
  console.log(tasktitle);

  if (tasktitle == "") {
    alert("please write to text ");
  } else {
    const item = document.createElement("li");
    item.innerHTML = tasktitle;
    tasklist.append(item);
    let span = document.createElement("span");
    span.innerHTML = "&times";
    item.appendChild(span);
    taskinput.value = "";
    savelistdata();
  }
});

tasklist.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
    savelistdata();
  }

  if (e.target.tagName == "SPAN") {
    const li = e.target.parentElement;
    li.remove();
    savelistdata();
  }
});

function showlistdata() {
  tasklist.innerHTML = localStorage.getItem("item");
}

function savelistdata() {
  localStorage.setItem("item", tasklist.innerHTML);
}

showlistdata();
