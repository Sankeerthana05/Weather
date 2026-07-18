const apiKey = "f51c937bfaf169424eacaa089c6180ea";
// let prm=fetch(url);


let search=document.querySelector(".search");
let btn=search.querySelector("button");
let ctyname=document.querySelector(".cityname");
var cty;

let prm,data;
async function get(url) {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    if (!response.ok) {
        alert(data.message);
        return;
    }

    changeTemp(data.main.temp, data.main.humidity, data.wind.speed);
    changeCity(data.name);
}
btn.addEventListener("click", () => {
    cty = search.querySelector("input").value;

    let newUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cty)}&appid=${apiKey}&units=metric`;

    get(newUrl);
});

let temp=document.querySelector(".temp");
let humidity=document.querySelector(".humidity");
let wind=document.querySelector(".wind");
let wther=document.querySelector(".weather_icon");
function changeTemp(tmp, hum, wnd, weather) {
    temp.innerHTML = `${Math.round(tmp)}&deg;C`;
    humidity.innerText = `${hum}%`;
    wind.innerText = `${wnd} km/hr`;

    if (weather == "Clouds") {
        wther.src = "clouds.png";
    } else if (weather == "Rain") {
        wther.src = "rain.png";
    } else if (weather == "Clear") {
        wther.src = "clear.png";
    } else if (weather == "Drizzle") {
        wther.src = "drizzle.png";
    } else if (weather == "Mist") {
        wther.src = "mist.png";
    }

    document.querySelector(".weather").style.display = "block";
}
function changeCity(newcty){
        ctyname.innerText=newcty.charAt(0).toUpperCase() + newcty.slice(1);
}

