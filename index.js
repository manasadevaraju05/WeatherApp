document.getElementById("getWeather").addEventListener("click", function () {
    const city = document.getElementById("city").value;
    const apiKey = "6dc7fc9d10d039e514eca1f5bf6bd4f9"; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then((data) => {
            const weather = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
            document.getElementById("weatherResult").innerHTML = weather;
        })
        .catch((error) => {
            document.getElementById("weatherResult").innerHTML = `<p>${error.message}</p>`;
        });
});
