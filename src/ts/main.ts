import { createMenu } from "./helpers/menu";
import { updateTime } from "./helpers/displayTime";
import { createWindow } from "./helpers/createWindow";
// buttons
const startBtn: HTMLButtonElement = document.getElementById(
  "programMenu"
) as HTMLButtonElement;
const omdbBtn: HTMLButtonElement = document.getElementById(
  "omdbBtn"
) as HTMLButtonElement;

//Show Time
setInterval(updateTime, 1000);

startBtn.addEventListener("click", createMenu);

omdbBtn.addEventListener("click", () => {
  //Call for functions
  createWindow();
  // To close menu when selecting an item
  createMenu();
});

createMenu();
