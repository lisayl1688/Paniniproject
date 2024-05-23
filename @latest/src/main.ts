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

// function melodyPlay() {
//   const melody = document.getElementById("melody") as HTMLAudioElement;
//   console.log(melody);
//   if (melody) {
//     melody.currentTime = melody.duration - 6;
//     melody.play();
//   }
// }

//? delete Character

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
  // imageElement.style.height = "250px";
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
  const deleteButton = document.createElement("button");
  deleteButton.innerText = `Delete`;
  card.appendChild(deleteButton);

  const changeButton = document.createElement("button");
  changeButton.innerText = `Change`;
  card.appendChild(changeButton);

  output?.appendChild(card);

  deleteButton.addEventListener("click", () => {
    function deleteCharacter() {
      card.remove();
    }
    deleteCharacter();
  });
}

//? addEventListener
addButton.addEventListener("click", (event: Event) => {
  event.preventDefault();
  const newCharacter = createCharacter();
  addCharacterToArray(newCharacter);
  addCharacterToOutput();
  // melodyPlay();
  startEmojiRain();
});

// Typdefinition für das Emoji-Element
type EmojiElement = {
  emoji: string;
  x: number;
  y: number;
  element: HTMLDivElement;
};

// Funktion zum Starten des Emoji-Regens
function startEmojiRain() {
  const emojis: string[] = ["👠", "👡", "🥿", "👢"]; // Emojis für Schuhe
  const emojiContainer = document.createElement("div");
  emojiContainer.id = "emojiContainer";
  document.body.appendChild(emojiContainer);

  // Schleife zum Erstellen und Einfügen von Emoji-Elementen in das Container-Element
  for (let i = 0; i < 100; i++) {
    //  Emojis für den Regen
    const emojiIndex = Math.floor(Math.random() * emojis.length);
    const emoji: EmojiElement = {
      emoji: emojis[emojiIndex],
      x: Math.random() * window.innerWidth, // Zufällige horizontale Position
      y: -50 - Math.random() * 100, // Startposition über dem Bildschirm
      element: document.createElement("div"),
    };

    emoji.element.innerText = emoji.emoji;
    emoji.element.style.position = "absolute";
    emoji.element.style.left = `${emoji.x}px`;
    emoji.element.style.top = `${emoji.y}px`;
    emojiContainer.appendChild(emoji.element);

    // Animation für das Fallen
    emoji.element.animate(
      [
        { transform: `translateY(${emoji.y}px)` }, // Startposition
        { transform: `translateY(${window.innerHeight + 500}px)` }, // Endposition (unterhalb des Bildschirms)
      ],
      {
        duration: 5000, // Dauer der Animation in Millisekunden
        iterations: 1, // Anzahl der Wiederholungen (1 für einmalige Animation)
        fill: "forwards", // Behalte den Endzustand der Animation bei
        easing: "linear", // Lineare Animation (gleichmäßige Geschwindigkeit)
      }
    );
  }
}

// Event-Listener für den Button "Add" hinzufügen, um den Emoji-Regen zu starten
// const addButton2 = document.getElementById("button");
// if (addButton) {
//   addButton.addEventListener("click", () => {
//     startEmojiRain();
//   });
// }
