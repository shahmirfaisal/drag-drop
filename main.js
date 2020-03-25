const empties = document.querySelectorAll(".empty"),
  draggable = document.querySelector(".draggable");

draggable.addEventListener("dragstart", dragStart);
draggable.addEventListener("dragend", dragEnd);

empties.forEach(empty => {
  empty.addEventListener("drop", dragDrop);
  empty.addEventListener("dragover", dragOver);
});

function dragStart() {
  console.log("Drag Start");
  setTimeout(() => this.classList.add("invisible"), 100);
}

function dragEnd() {
  console.log("Start End");
  this.classList.remove("invisible");
}

function dragOver(e) {
  e.preventDefault();
  console.log("Drag Over");
}

function dragDrop(e) {
  console.log("Drop");
  this.appendChild(draggable);
}
