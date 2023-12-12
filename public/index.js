



const cityName = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const wtrIcon = document.querySelector(".weather-icon");



async function checkWeather(city){
   
await  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a5c8ab4e9a8fee08c90cf7523a6de433&units=metric`)
         .then((response)=>{
            const result = response.data;
            document.querySelector(".city").innerHTML = result.name;
            document.querySelector(".temp").innerHTML = Math.round(result.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = result.main.humidity + "%";
            document.querySelector(".wind").innerHTML = result.wind.speed + "km/hr";
          
          
          
            if(result.weather[0].main == "Cloud"){
              wtrIcon.src = "./images/cloud.png"
            }else if(result.weather[0].main == "Clear"){
              wtrIcon.src = "./images/clear.png"
            }else if(result.weather[0].main == "Rain"){
              wtrIcon.src = "./images/rain.png"
            }else if(result.weather[0].main == "Drizzle"){
              wtrIcon.src = "./images/drizzle.png"
            }else if(result.weather[0].main == "Mist"){
              wtrIcon.src = "./images/mist.png"
            }
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
         })
         .catch(e=>{
           if(e.response.status == 404){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
           }
         })  

  }
  


searchBtn.addEventListener("click",()=>{
   
  checkWeather(cityName.value)
})