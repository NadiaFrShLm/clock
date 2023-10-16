const handHour = document.querySelector('.hand--hour');
const handMin = document.querySelector('.hand--min');
const handSec = document.querySelector('.hand--sec');
const date = document.querySelector('.date');

const setTime = function () {
  const now = new Date();
  // seconds
  const seconds = now.getSeconds();
  const degreSeconds = (seconds / 60) * 360 + 90;
  handSec.style.transform = `rotate(${degreSeconds}deg)`;

  // minutes
  const minutes = now.getMinutes();
  const degreMinutes = (minutes / 60) * 360 + 90;
  handMin.style.transform = `rotate(${degreMinutes}deg)`;

  // hours
  const hours = now.getHours();
  const degreHours = (hours / 12) * 360 + 90;
  handHour.style.transform = `rotate(${degreHours}deg)`;

  // date
  const day = now.getDate();
  const month = now.getMonth();
  const monthNames = [
    'Jan.',
    'Feb.',
    'Mar.',
    'Apr.',
    'May.',
    'Jun.',
    'Jul.',
    'Aug.',
    'Sept.',
    'Oct.',
    'Nov.',
    'Dec.',
  ];

  date.innerHTML = `${day} ${monthNames[month]}`;
};
setInterval(setTime, 1000);
setTime();
