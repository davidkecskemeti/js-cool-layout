console.log("log test");
const listItems = document.querySelectorAll("li");
const photos = document.querySelectorAll("img");

listItems.forEach((li, i) => {
  li.addEventListener("mouseenter", () => {
    photos[i].classList.add("intro");
  });
  li.addEventListener("mouseleave", () => {
    photos[i].classList.remove("intro");
  });
  li.addEventListener("mousemove", (e) => {
    photos[i].style.left = -e.clientX * 0.5 + "px";
    photos[i].style.top = -e.clientY * 0.5 + 100 + "px";
  });
});
