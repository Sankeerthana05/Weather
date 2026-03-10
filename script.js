const url ="https://api.openweathermap.org/data/2.5/weather?q=visakhapatnam&appid=45b3cc60d72d663abbc82e54a0aa5bd9&units=metric";
// let prm=fetch(url);


let search=document.querySelector(".search");
let btn=search.querySelector("button");
let ctyname=document.querySelector(".cityname");
var cty;

let prm,data;
async function get(url){

        prm=await fetch(url);
        
        if(prm.status==404){
                document.querySelector(".error").style.display="block";
                document.querySelector(".weather").style.display="none";
        }
        else{

               data = await prm.json();
               changeTemp(data.main.temp,data.main.humidity,data.wind.speed);
               changeCity(cty);
        }
        
};
btn.addEventListener("click",()=>{
        cty=search.querySelector("input").value;
        let newrl=`https://api.openweathermap.org/data/2.5/weather?q=${cty.toLowerCase()}&appid=45b3cc60d72d663abbc82e54a0aa5bd9&units=metric`;
        get(newrl);
        // changeCity(cty);
});

let temp=document.querySelector(".temp");
let humidity=document.querySelector(".humidity");
let wind=document.querySelector(".wind");
let wther=document.querySelector(".weather_icon");
function changeTemp(tmp,hum,wnd){
        temp.innerHTML=`${Math.round(tmp)}&degC`;
        humidity.innerText=`${hum}%`;
        wind.innerText=`${wnd}km/hr`;
        if(data.weather[0].main=="Clouds"){
                wther.src="clouds.png";
        }
        else if(data.weather[0].main=="Rain"){
                wther.src="rain.png";
        }
        else if(data.weather[0].main=="Clear"){
                wther.src="clear.png";
        }
        else if(data.weather[0].main=="Drizzle"){
                wther.src="drizzle.png";
        }
        else if(data.weather[0].main=="Mist"){
                wther.src="mist.png";
        }
        document.querySelector(".weather").style.display="block";

}
function changeCity(newcty){
        ctyname.innerText=newcty.charAt(0).toUpperCase() + newcty.slice(1);
}

