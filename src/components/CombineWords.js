import React from "react";

//get random index of array

const sillyWordList = ["Jerk", "Idiot"];
const randomWord = mr => Math.floor(Math.random() * mr.length);
const CombineWords = () => sillyWordList[randomWord(sillyWordList)];

//wordlists pass through these parameters to create individual execution environments for the same or different lists
// combineWord = (a, b, c, d) => a + " " + b + " " + c + " " + d;

export default CombineWords;
