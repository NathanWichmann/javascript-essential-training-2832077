/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);


const everyDayPack = new Backpack(
  "Sunday Backpack",
  65,
  "orange",
  57,
  40,
  40,
  true
);

console.log("The new pack ", everyDayPack);
console.log("The new pack is open", everyDayPack.lidOpen);