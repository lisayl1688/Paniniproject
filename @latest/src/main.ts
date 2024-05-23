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
const address = document.getElementById("adress") as HTMLInputElement;
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
  gender: string;
  address: string;
  characteristics: string;
  lover: string;
  quote: string;
  image: string;
};

//? Liste von Panini CArds
const characterArray: Character[] = [];

//? Function addCharacter

function createCharacter(): Character {
  const newCharacter: Character = {
    firstname: firstName.value,
    lastname: lastName.value,
    age: Number(age.value),
    gender: gender.value,
    address: address.value,
    characteristics: characteristics.value,
    lover: lover.value,
    quote: quote.value,
    image: image.value, //TODO: Src checken
  };
  return newCharacter;
}

function addCharacterToArray(newCharacter: Character) {
  characterArray.push(newCharacter);
  console.log(characterArray);
}

function addCharacterToOutput() {
  createPaniniCard();
}

function melodyPlay() {
  const melody = document.getElementById("melody") as HTMLAudioElement;
  console.log(melody);
  if (melody) {
    console.log(melody);
    melody.play();
  }
}

//? Panini Card
function createPaniniCard() {
  const card = document.createElement("div");
  card.className = "paniniCard";

  const headlineElement = document.createElement("h2");
  headlineElement.innerText = `${firstName.value} ${lastName.value}`;
  card.appendChild(headlineElement);

  const imageElement = document.createElement("img");
  imageElement.src = `${image.value}`;
  imageElement.style.width = "250px";
  imageElement.style.boxShadow = "4px 4px 4px grey";
  imageElement.style.borderRadius = "10px";
  card.appendChild(imageElement);

  const ageElement = document.createElement("p");
  ageElement.innerText = `Age: ${age.value}`;

  card.appendChild(ageElement);

  const genderElement = document.createElement("p");
  genderElement.innerText = `Gender: ${gender.value}`;

  card.appendChild(genderElement);

  const addressElement = document.createElement("p");
  addressElement.innerText = `Address: ${address.value}`;
  card.appendChild(addressElement);

  const characteristicsElement = document.createElement("p");
  characteristicsElement.innerText = `Characteristics: ${characteristics.value}`;
  card.appendChild(characteristicsElement);

  const loverElement = document.createElement("p");
  loverElement.innerText = `Lover: ${lover.value}`;
  card.appendChild(loverElement);

  const quoteElement = document.createElement("p");
  quoteElement.innerText = `Quote: "${quote.value}"`;
  card.appendChild(quoteElement);

  output?.appendChild(card);
}

//? addEventListener
addButton.addEventListener("click", (event: Event) => {
  event.preventDefault();
  const newCharacter = createCharacter();
  addCharacterToArray(newCharacter);
  addCharacterToOutput();
  melodyPlay();
});
