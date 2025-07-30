// WEATHER HANDLER
document.addEventListener('DOMContentLoaded', () => {
  //get elements to handle
  const weatherForm = document.getElementById('weatherForm');
  const weatherResult = document.getElementById('weatherResult');

  //add event listener to change the container which contains the weather information
  weatherForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    //set loading
    const city = document.getElementById('cityInput').value;
    weatherResult.innerHTML = `<p class="text-gray-500">Loading...</p>`;

    //call server service from weather and return the injected HTML
    try {
      const response = await fetch(`/weather?city=${encodeURIComponent(city)}`);
      const data = await response.json();
      if (response.status >= 200 && response.status <= 399) {
        const html = `
              <div class="p-4 border rounded bg-blue-50">
                  <p><strong>Location:</strong> ${data.location.name}, ${data.location.country}</p>
                  <p><strong>Temperature:</strong> ${data.current.temp_c} °C</p>
                  <p><strong>Condition:</strong> ${data.current.condition.text}</p>
                  <p><strong>Time:</strong> ${data.location.localtime}</p>
              </div>
        `;
        weatherResult.innerHTML = html;
      } else {
        throw new Error(`Houston! We have a problem: ${data.Error}`);
      }
    } catch (err) {
      weatherResult.innerHTML = `<p class="text-red-500">Error: ${err.message}</p>`;
    }
  });
});