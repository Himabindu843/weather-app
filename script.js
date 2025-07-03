async function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  const apiKey = '0c10448fc4a5e6242a2ee5f1ecfc9d32'; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data); // shows full response in browser console

    if (data.cod === 200) {
      const weatherInfo = `
        <p><strong>City:</strong> ${data.name}</p>
        <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
        <p><strong>Feels Like:</strong> ${data.main.feels_like} °C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      `;
      document.getElementById('weatherResult').innerHTML = weatherInfo;
    } else {
      document.getElementById('weatherResult').innerHTML = `<p>❌ City not found: <strong>${city}</strong></p>`;
    }
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('weatherResult').innerHTML = `<p>⚠️ Error fetching weather data</p>`;
  }
}
