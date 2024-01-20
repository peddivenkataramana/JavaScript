var list = document.getElementById("list");

function create() {
  var li = document.createElement("li");

  var container = document.createElement("div");
  container.style.position = "relative";

  var text = document.createElement("textarea");

  var deleteimg = document.createElement("img");
  deleteimg.src = "images/delete.png";
  deleteimg.style.width = "35px";
  deleteimg.style.height = "25px";
  deleteimg.style.position = "absolute";
  deleteimg.style.top = "233px";
  deleteimg.style.left = "900px";

  container.appendChild(text);
  container.appendChild(deleteimg);
  li.appendChild(container);
  list.appendChild(li);
  deleteimg.style.cursor = "pointer";

  deleteimg.addEventListener("click", function () {
    list.removeChild(li);
  });
  saveListToLocalStorage();
}

function saveListToLocalStorage() {
  var items = list.innerHTML;
  localStorage.setItem("listContent", items);
}

function loadListFromLocalStorage() {
  var savedItems = localStorage.getItem("listContent");
  if (savedItems) {
    list.innerHTML = savedItems;
  }
}

loadListFromLocalStorage();
