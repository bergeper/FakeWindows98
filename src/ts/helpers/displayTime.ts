// export time
export const updateTime = () => {
  // show time
  const showDate: HTMLSpanElement = document.getElementById(
    "date"
  ) as HTMLSpanElement;
  let date: Date = new Date();
  let currentTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  let showTime = currentTime.toString();
  showDate.innerHTML = showTime;
};
