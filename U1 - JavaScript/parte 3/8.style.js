const div = document.getElementById("div1");

div.addEventListener("click", () => {
  if(div.style.backgroundColor === "green") {
    div.style.backgroundColor = "";
    div.style.color = "";
  } else {
    div.style.backgroundColor = "green";
    div.style.color = "white";
  }
});
