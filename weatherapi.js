const apiKey = "269468050d545182a9da20251ffe881e"; // Replace with your OpenWeatherMap API key
    const cities = ["Phnom Penh", "Siem Reap", "Battambang", "Sihanoukville", "Kampot"];

    async function fetchWeather(city) {
      try {
        // Fetch geolocation
        const geocodeUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
        const geocodeResponse = await fetch(geocodeUrl);
        const geocodeData = await geocodeResponse.json();

        if (!geocodeData.length) throw new Error(`${city} not found`);

        const { lat, lon } = geocodeData[0];

        // Fetch weather
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        const weatherResponse = await fetch(weatherUrl);
        return await weatherResponse.json();
      } catch (error) {
        console.error(error.message);
        return null;
      }
    }

    async function displayWeather() {
      const weatherContainer = document.getElementById('weather');
      weatherContainer.innerHTML = ""; // Clear loading message

      for (const city of cities) {
        const weatherData = await fetchWeather(city);

        if (weatherData) {
          weatherContainer.innerHTML += `
            <div class="city-weather">
              <h3 style='margin-bottom: 10px'>${weatherData.name}, ${weatherData.sys.country}</h3>
              <p style='margin-bottom: 10px'>Temperature: <span style='color: green'>${weatherData.main.temp}°C </span></p>
              <p style='margin-bottom: 10px'>Weather: <span style='color: red'>${weatherData.weather[0].description}</span></p>
            </div>
          `;
        } else {
          weatherContainer.innerHTML += `
            <div class="city-weather">
              <h2>${city}</h2>
              <p>Weather data unavailable</p>
            </div>
          `;
        }
      }
    }

    displayWeather();