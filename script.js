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

  createCard(dataobj);
});
const infoDiv = document.querySelector(".bookInfo");
function createCard(dataobj) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  const newDiv = document.createElement("div");
  newDiv.classList.add("newDiv");
  const dltButton = document.createElement("button");
  dltButton.classList.add("dltButton");
  dltButton.addEventListener("click", () => {
    infoDiv.removeChild(cardDiv);
  });

  let valuesString = "";
  for (var key in dataobj) {
    if (dataobj.hasOwnProperty(key)) {
      if (key == "title") {
        cardDiv.innerHTML = `<h1>${dataobj[key]}</h1><br>`;
      } else if (key == "radio") {
        valuesString += "<br>" + dataobj[key] + "<br>";
      } else {
        valuesString += "<br>" + key + "  :    " + dataobj[key] + "<br>";
      }
    }
  }

  newDiv.innerHTML += valuesString;

  cardDiv.appendChild(newDiv);

  cardDiv.appendChild(dltButton);
  infoDiv.appendChild(cardDiv);
}
