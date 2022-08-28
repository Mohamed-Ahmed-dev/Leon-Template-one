const bar = document.getElementById("bar");

const nav = document.getElementById("nav");

bar.addEventListener("click", (eo) => {
  nav.classList.toggle("list");
});
