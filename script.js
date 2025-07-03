async function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  const apiKey = 'API KEY';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      const iconCode = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

      const weatherInfo = `
        <img src="${iconUrl}" alt="Weather Icon" />
        <p><strong>${data.name}, ${data.sys.country}</strong></p>
        <p>🌡 Temperature: ${data.main.temp}°C</p>
        <p>🌥 Weather: ${data.weather[0].main} (${data.weather[0].description})</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>💨 Wind: ${data.wind.speed} m/s</p>
      `;

      document.getElementById('weatherResult').innerHTML = weatherInfo;
    } else {
      document.getElementById('weatherResult').innerHTML = `<p> City not found: <strong>${city}</strong></p>`;
    }
  } catch (error) {
    console.error(error);
    document.getElementById('weatherResult').innerHTML = `<p>Error fetching weather data</p>`;
  }
}
