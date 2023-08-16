const preheader = document.querySelector(".preheader");
const closePreheader = document.querySelector(".close-preheader");

closePreheader.addEventListener("click", () => {
  preheader.remove();
});
