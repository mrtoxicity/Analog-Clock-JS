function toggleClass() {
  const body = document.querySelector("body");
  body.classList.toggle("light");
}

const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");
setInterval(() => {
  let day = new Date();
  let h = day.getHours();
  let m = day.getMinutes();
  let s = day.getSeconds();
  let hourRotate = h * 30 + m * 0.5 + s * 0.00833;
  let minuteRotate = m * 6 + s * 0.1;
  let secondRotate = s * 6;
  hr.style.transform = `rotateZ(${hourRotate}deg)`;
  mn.style.transform = `rotateZ(${minuteRotate}deg)`;
  sc.style.transform = `rotateZ(${secondRotate}deg)`;
});
