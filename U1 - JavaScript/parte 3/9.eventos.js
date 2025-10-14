const div = document.getElementById("div1");
const google = document.getElementById("google");

google.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("No puedes ir a Google");
});

div.addEventListener("mouseenter", () => {
  div.classList.add("activo");
});

div.addEventListener("mouseleave", (s) => {
  div.classList.remove("activo");
});

div.addEventListener("mousemove", (e) => {
  const x = e.x - div.offsetLeft;
  const y = e.y - div.offsetTop;
  div.textContent = `(${x}, ${y})`;
});

div.addEventListener("click", (e) => {
  if(e.ctrlKey) {
    div.style.borderColor = "red";
  }
});


