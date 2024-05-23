//! Panini Bilder

// Du solltest mindestens 7 Eigenschaften anlegen, davon eine eine URL zu einem Bild
// Erstelle eine Inputform und ein Button im HTML für die Erstellung einer Paninikarte.
//?Erstelle eine Methode, um die Karten in HTML anzuzeigen.

//? alle Elemente aus HTML holen

const output = document.getElementById("output") as HTMLOutputElement;
const firstName = document.getElementById("firstName") as HTMLInputElement;
const lastName = document.getElementById("lastName") as HTMLInputElement;
const age = document.getElementById("age") as HTMLInputElement;
const gender = document.getElementById("select-gender") as HTMLSelectElement;
const adress = document.getElementById("adress") as HTMLInputElement;
const characteristics = document.getElementById(
  "characteristics"
) as HTMLInputElement;
const lover = document.getElementById("lover") as HTMLInputElement;
const quote = document.getElementById("quote") as HTMLInputElement;
const image = document.getElementById("image-url") as HTMLInputElement;
const addButton = document.getElementById("button") as HTMLInputElement;

//? Erstelle einen Type für deine ausgewählte Art von Sammelkarten mit verschiedenen Merkmalen/Eigenschaften (z.B. Rapper: Künstlername, Alter, verkaufte Singles/Alben etc.)

type Character = {
  firstname: string;
  lastname: string;
  age: number;
  gender: number;
  adress: string;
  characteristics: string[];
  lover: string[];
  quote: string;
  image: string;
};

//? Function addCharacter
function addCharacter() {}

//? Panini Card
function createPaniniCard() {
  const card = document.createElement("div");
  card.className = "paniniCard";
  const headlineElement = document.createElement("h2");
  headlineElement.innerText = `${firstName.value} ${lastName.value}`;
  card.appendChild(headlineElement);
  const imageElement = document.createElement("img");
  headlineElement.innerText = `${image.value}`; //TODO: src checken
  card.appendChild(imageElement);
  const pageElement = document.createElement("p");
  headlineElement.innerText = `${age.value}`;
  card.appendChild(pageElement);
  const pGenderElement = document.createElement("p");
  headlineElement.innerText = `${gender.value}`;
  card.appendChild(pGenderElement);
  const pAdressElement = document.createElement("p");
  headlineElement.innerText = `${adress.value}`;
  card.appendChild(pAdressElement);
  output?.appendChild(card);
}

//? addEventListener
addButton.addEventListener("click", (event: Event) => {
  //TODO: submit hinterlegen
  event.preventDefault();

  addCharacter();
});
