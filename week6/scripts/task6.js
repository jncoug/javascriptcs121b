
// create variable to store the weather data
var weather = [];

// define function to put the json data from the API into the html
function setWeather(weather) {
    
    document.querySelector('#city').textContent = weather.location.name;
    document.querySelector('#state').textContent = weather.location.region;
    document.querySelector('#tempurature').textContent = weather.current.temp_f + " degrees";
    document.querySelector('#humidity').textContent = weather.current.humidity + "%";
    document.querySelector('#weather').textContent = weather.current.condition.text;
    
}

// define function to retrieve the weather data based on zip code
async function getWeather() {

    let zip = document.querySelector('#zipcode').value;
    let url = "http://api.weatherapi.com/v1/current.json?key=2b01551f4eeb4fcc92642141221707&q=" + zip + "&aqi=no"

    const response = await fetch(url);
    console.log("Waiting for weather");
    
    if (response.ok) {
            
        weather = await response.json();
            
    }
    setWeather(weather);
        
}

// call for the weather when the update button is pressed
document.querySelector('#update').addEventListener("click", getWeather)
    