const APIkey="e2a8448b80ae2da9a6be96151171b436" //add your own api key
const weatherIcon=document.querySelector(".weather-icon");
const url=`https://api.openweathermap.org/data/2.5/weather?&appid=${APIkey}&units=metric&q=`
const search=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")
async function checkWeather(city){
    const response=await fetch(url+city);
    if(response.status==404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"
    }else{
        var data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%"
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/hr"
    if(data.weather[0]=="Clouds"){
        weatherIcon.src="images/clouds.png";
    }
    else if(data.weather[0]=="Clear"){
        weatherIcon.src="images/clear.png";
    }
    else if(data.weather[0]=="Rain"){
        weatherIcon.src="images/rain.png";
    }
    else if(data.weather[0]=="Drizzle"){
        weatherIcon.src="images/drizzle.png";
    }
    else if(data.weather[0]=="Mist"){
        weatherIcon.src="images/mist.png";
    }
    document.querySelector(".weather").style.display="block"
    document.querySelector(".error").style.display="none"
    }
    
}
searchBtn.addEventListener("click",()=>{
    checkWeather(search.value);
})
