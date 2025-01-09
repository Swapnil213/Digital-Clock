let day = document.querySelector(".day");
let date = document.querySelector(".date");
let month = document.querySelector(".month");
let year = document.querySelector(".year");
let hours = document.querySelector(".hrs");
let min = document.querySelector(".mins");
let sec = document.querySelector(".secs");
let format = document.querySelector("#formatChanger");

let present = new Date();

day.innerHTML = present.toLocaleString("default", { weekday: "long" });
month.innerHTML = present.toLocaleString("default", { month: "short" });
date.innerHTML = present.getDate();
year.innerHTML = present.getFullYear();

setInterval(() => {
    let present = new Date();

    if (format.checked) {
        hours.innerHTML = present.getHours();
    } else if (present.getHours() % 12 == 0) {
        hours.innerHTML = present.getHours() % 12;
    } else if(present.getHours() % 12 < 10){
        hours.innerHTML = "0" + present.getHours() % 12;
    } else {
        hours.innerHTML = present.getHours() % 12;
    }

    min.innerHTML = (present.getMinutes() < 10 ? "0" : "") + present.getMinutes();
    sec.innerHTML = (present.getSeconds() < 10 ? "0" : "") + present.getSeconds();

}, 1000);