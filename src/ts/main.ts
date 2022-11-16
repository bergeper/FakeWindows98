// buttons
const startBtn: HTMLButtonElement = document.getElementById(
  "programMenu"
) as HTMLButtonElement;
const omdbBtn: HTMLButtonElement = document.getElementById(
  "omdbBtn"
) as HTMLButtonElement;

// main container
const mainContainer: HTMLDivElement = document.getElementById(
  "main"
) as HTMLDivElement;
// second container
const windowContainer: HTMLDivElement = document.createElement("div");
windowContainer.classList.add("window");
mainContainer.appendChild(windowContainer);

// menu
const menuContainer: HTMLDivElement = document.querySelector(
  ".menu"
) as HTMLDivElement;

// show time
const showDate: HTMLSpanElement = document.getElementById(
  "date"
) as HTMLSpanElement;

const updateTime = () => {
  let date: Date = new Date();
  let currentTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  let pop = currentTime.toString();
  showDate.innerHTML = pop;
};
setInterval(updateTime, 1000);

// create Menu
const createMenu = () => {
  let isHidden = menuContainer.style.display === "none";
  if (isHidden) {
    menuContainer.style.display = "block";
  } else {
    menuContainer.style.display = "none";
  }
};
startBtn.addEventListener("click", createMenu);

const searchMovies = () => {
  const windowContainer: HTMLDivElement = document.createElement("div");
  mainContainer.appendChild(windowContainer);
  let searchMovieContainer: HTMLDivElement = document.createElement("div");
  let searchMovieTitle: HTMLHeadingElement = document.createElement("h3");
  let searchMoviePoster: HTMLImageElement = document.createElement("img");

  searchMovieContainer.classList.add("window");
  searchMovieTitle.classList.add("window__title");

  searchMovieContainer.appendChild(searchMovieTitle);
  searchMovieContainer.appendChild(searchMoviePoster);

  windowContainer.appendChild(searchMovieContainer);
};

omdbBtn.addEventListener("click", searchMovies);
