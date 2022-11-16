const startBtn: HTMLButtonElement = document.getElementById(
  "programMenu"
) as HTMLButtonElement;

const mainContainer: HTMLDivElement = document.getElementById(
  "main"
) as HTMLDivElement;

const menuContainer: HTMLDivElement = document.getElementById(
  "menu"
) as HTMLDivElement;

const createMenu = () => {
  let isHidden = menuContainer.style.display === "none";
  if (isHidden) {
    menuContainer.style.display = "block";
  } else {
    menuContainer.style.display = "none";
  }
};

startBtn.addEventListener("click", createMenu);
