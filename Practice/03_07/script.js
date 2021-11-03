/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
const updateComputer = (update) => {
  let main = document.querySelector("main");
  main.innerHTML = markup(Computer);
  console.info(update);
};

const Computer = {
  name: "Bob the Computer",
  colour: "Gray",
  keys: "qwerty",
  monitor: "hp",
  ssd: "1 terra byte",
  ram: 16,
  peripherial: {
      mouse: "black",
      keyboard: "multi colour"

  },
  computerOn: true,

  toggleComputer: function (computerStatus) {
    this.computerOn = computerStatus;
    updateComputer(`Computer status changed`);
  },
};

const markup = (Computer) => {
  return `
    <div>
      <h3>${Computer.name}</h3>
      <ul>
        <li>Monitor: ${Computer.monitor}</li>
        <li>Color: ${Computer.colour}</li>
        <li>Keys: ${Computer.keys}</li>
        <li>Ram: ${Computer.ram}</li>
        <li>SSD: ${Computer.ssd}</li>
        <li> Mouse colour: ${Computer.peripherial.mouse} </li>
        <li> Keyboard colour: ${Computer.peripherial.keyboard} </li>
        <li>Computer Status: ${Computer.computerOn ? "On" : "Off"}</li>
      </ul>
    </div>
  `;
};

const main = document.createElement("main");
main.innerHTML = markup(Computer);
document.body.appendChild(main);
