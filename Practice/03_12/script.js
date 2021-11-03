/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */


import Backpack from "./Backpack.js";

const everyDayPack = new Backpack(
    "The best backpack ever",
    "120L",
    "Purple",
    25,
    60,
    60,
    true

);
console.log("The everydayPack object:", everyDayPack);
console.log("The pocketNum value:", everyDayPack.pocketNum);

const sundayPack = new Backpack(
    "Sunday and thats my fun day",
    "120L",
    "Purple",
    25,
    60,
    60,
    true

);
console.log("The everydayPack object:", sundayPack);
console.log("The best day is:", sundayPack.name);


