const apiKey = "YOUR_API_KEY";
const city = "New York";
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log("Weather in", city + ":");
        console.log("Description:", data.weather[0].description);
        console.log("Temperature:", (data.main.temp - 273.15).toFixed(2) + "°C");
        console.log("Humidity:", data.main.humidity + "%");
    })
    .catch(error => console.error("Error fetching weather data:", error));
