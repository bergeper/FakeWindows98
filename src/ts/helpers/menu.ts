// create Menu
export const createMenu = () => {
  // menu
  const menuContainer: HTMLDivElement = document.querySelector(
    ".menu"
  ) as HTMLDivElement;

  let isHidden = menuContainer.style.display === "none";
  if (isHidden) {
    menuContainer.style.display = "block";
  } else {
    menuContainer.style.display = "none";
  }
};
