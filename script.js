const apikey="e888ecf7561b9dd1fbfb3b24745c77bf";
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon");
// console.log(searchBtn);

async function cheackweather(city){
    const response=await fetch(apiURL+city+`&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{

        var data=await response.json();
    // console.log(data);
    document.querySelector(".city").innerText=data.name;
    document.querySelector(".temp").innerText=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerText=data.main.humidity+"%";
    document.querySelector(".wind").innerText=Math.round(data.wind.speed)+" Km/hr";
    if(data.weather[0].main=="Clouds"){
        weathericon.src="images/clouds.png";

    }
    else if(data.weather[0].main=="Clear"){
        weathericon.src="images/clear.png";

    }
    else if(data.weather[0].main=="Rain"){
        weathericon.src="images/rain.png";

    }
    else if(data.weather[0].main=="Drizzle"){
        weathericon.src="images/drizzle.png";

    }
    else if(data.weather[0].main=="Mist"){
        weathericon.src="images/mist.png";

    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";        

    }
    

    // if(1){
    //     console.log(rah=weathericon.innerText);
    //     // weathericon.innerHTML=;
        

    // }

}
searchBtn.addEventListener("click",()=>{
    cheackweather(searchBox.value);
})
// cheackweather();

