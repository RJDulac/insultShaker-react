import WordList from "./WordList";
const randomWord = mr => Math.floor(Math.random() * mr.length);
const randomizeWords = () => WordList[randomWord(WordList)];

//wordlists pass through these parameters to create individual execution environments for the same or different lists
const RandomWordList = () =>
  `${randomizeWords()} ${randomizeWords()} ${randomizeWords()}`;

export default RandomWordList;
