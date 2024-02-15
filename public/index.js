let outerCursor = document.getElementById("outer-cursor");
let innerCursor = document.getElementById("inner-cursor");

document.addEventListener("mousemove", cursorMove);

function cursorMove(e) {
  let x = e.clientX;
  let y = e.clientY;
  outerCursor.style.left = `${x}px`;
  outerCursor.style.top = `${y}px`;
  innerCursor.style.left = `${x}px`;
  innerCursor.style.top = `${y}px`;
}

document.addEventListener("mousedown", function () {
  outerCursor.classList.add("cursor-hover");
});
document.addEventListener("mouseover", function (e) {
  if (
    e.target.tagName === "SPAN" ||
    e.target.tagName === "LABEL" ||
    e.target.tagName === "A"
  ) {
    outerCursor.classList.add("cursor-hover");
  } else {
    outerCursor.classList.remove("cursor-hover");
  }
});

document.addEventListener("mouseup", function () {
  outerCursor.classList.add("cursor-hover");
  outerCursor.classList.remove("cursor-hover");
});
