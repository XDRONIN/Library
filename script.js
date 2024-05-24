const addButton = document.querySelector(".addButton");
addButton.addEventListener("click", () => {
  document.querySelector(".popup").classList.add("active");
});
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  document.querySelector(".popup").classList.remove("active");
  e.preventDefault();
  const fd = new FormData(form);
  const dataobj = Object.fromEntries(fd);
  form.reset();
  console.log(dataobj);
  createCard(dataobj);
});

const infoDiv = document.querySelector(".bookInfo");
function createCard(dataobj) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  let valuesString = "";
  for (var key in dataobj) {
    if (dataobj.hasOwnProperty(key)) {
      valuesString += key + dataobj[key] + "<br>";
    }
  }

  cardDiv.innerHTML = valuesString;
  infoDiv.appendChild(cardDiv);
  document.appendChild(infoDiv);
}
