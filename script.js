const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b4757b468cmsh10b4d5dde591069p189251jsn40611ca94e79',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
let getweather = (city) => {
    cityname.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            // cloud_pct.innerHTML = response.cloud_pct 
            temp.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        }
        )
        .catch(err => console.error(err));
}
let getweather1 = (city, temp1, feels_like1, humidity1, min_temp1, max_temp1, wind_speed1, wind_degrees1, sunrise1, sunset1) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            temp1.innerHTML = response.temp
            feels_like1.innerHTML = response.feels_like
            humidity1.innerHTML = response.humidity
            min_temp1.innerHTML = response.min_temp
            max_temp1.innerHTML = response.max_temp
            wind_speed1.innerHTML = response.wind_speed
            wind_degrees1.innerHTML = response.wind_degrees
            sunrise1.innerHTML = response.sunrise
            sunset1.innerHTML = response.sunset
        }
        )
        .catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
    e.preventDefault()
    getweather(city.value)
})
getweather("bhopal")
getweather1("delhi", delhic1, delhic2, delhic3, delhic4, delhic5, delhic6, delhic7, delhic8, delhic9)
getweather1("mumbai", mumbaic1, mumbaic2, mumbaic3, mumbaic4, mumbaic5, mumbaic6, mumbaic7, mumbaic8, mumbaic9)
getweather1("kolkata", kolkatac1, kolkatac2, kolkatac3, kolkatac4, kolkatac5, kolkatac6, kolkatac7, kolkatac8, kolkatac9)
getweather1("chennai", chennaic1, chennaic2, chennaic3, chennaic4, chennaic5, chennaic6, chennaic7, chennaic8, chennaic9)
// getweather1("bhopal", bhopalc1, bhopalc2, bhopalc3, bhopalc4, bhopalc5, bhopalc6, bhopalc7, bhopalc8, bhopalc9)
// getweather1("hyderabad", hyderabadc1, hyderabadc2, hyderabadc3, hyderabadc4, hyderabadc5, hyderabadc6, hyderabadc7, hyderabadc8, hyderabadc9)