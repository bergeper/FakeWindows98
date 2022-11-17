// main container
const mainContainer: HTMLDivElement = document.getElementById(
  "main"
) as HTMLDivElement;

export const createWindow = () => {
  const windowContainer: HTMLDivElement = document.createElement("div");
  mainContainer.appendChild(windowContainer);
  let searchMovieContainer: HTMLDivElement = document.createElement("div");
  let searchMovieTitle: HTMLHeadingElement = document.createElement("h3");
  let searchMoviePoster: HTMLImageElement = document.createElement("img");

  searchMovieContainer.classList.add("window");
  searchMovieTitle.classList.add("window__title");
  searchMoviePoster.classList.add("window___poster");

  searchMovieTitle.innerHTML = "Max är king på att göra loggor";
  searchMoviePoster.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvn69xIp4DGLuioB_WkDn0eXXlyCtrTBRJBw&usqp=CAU";

  searchMovieContainer.appendChild(searchMovieTitle);
  searchMovieContainer.appendChild(searchMoviePoster);

  windowContainer.appendChild(searchMovieContainer);
};
