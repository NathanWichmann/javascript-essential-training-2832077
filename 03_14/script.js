/**
 * Challenge: Create a new object type
 * 
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */
import Book from "./Book.js";
import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

const Sci_Fi = new Book(
  "Star wars: Return of the jedi",
  "James Kahn",
  225,
  "Science Fiction",
  "5 stars",
  true
  );
  console.log("", Sci_Fi)
  console.log("the books name is", Sci_Fi.name)

  const Zen = new Book(
    "Warior Princess",
    "James Kahn",
    225,
    "Science Fiction",
    "5 stars",
    true
    );
    console.log("", Zen)
    console.log("the books name is", Sci_Fi.name)

  
