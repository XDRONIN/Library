const addButton = document.querySelector(".addButton");
addButton.addEventListener("click", () => {
  document.querySelector(".popup").classList.add("active");
});
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fd = new FormData(form);
  const dataobj = Object.fromEntries(fd);
  console.log(dataobj);
});
