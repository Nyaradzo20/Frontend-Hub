async function getWeather() {
try
{
const apikey = "";
const city = 'Cape Town';
const unit = 'metric'
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apikey}`;

    const response= await fetch(url);

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(`City not found. Please check the city name.`); // More specific error
      } else {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
    }

    const data = await response.json(); // **Crucially, await the response.json()**
    const result = [
      data.main.temp,        // Temperature
      data.main.humidity,    // Humidity
      data.weather[0].main,  // Weather condition (e.g., Clear, Rain)
      data.name,             // City name
      data.sys.country       // Country code
  ];

    console.log(data);// Log the entire data object for debugging


    // **Check if data.weather exists and is an array before accessing its elements**
   /* if (data.weather && Array.isArray(data.weather) && data.weather.length > 0) {
        */
      /* console.log(`Temperature: ${data.main.temp}`); // Use data.main.temp for temperature
        console.log(`Weather: ${data.weather[0].description}`);
        console.log(`City: ${data.name}`); // Use data.name for city
        console.log(`Wind: ${data.wind.speed}`);
        console.log(`Feels Like: ${data.weather[0].main}`);
*/

    /*} else {
      console.error('Weather data is invalid or missing.');  //Handle cases where weather data is not available.
      // Perhaps display a message to the user
    }

*/
/*document.getElementById("show").innerHTML = `Feels Like: ${data.weather[0].main}`;*/
return data;

  } 
  catch (error) {
    console.error('Failed to fetch weather data:', error);
    // Display the error to the user in a user-friendly way.
  }
};
/*

getWeather();*/
 async function Search() { 
  const container = document.getElementById("show")// Use async because we are waiting for the result of getWeather
    try {
        const weatherData = await getWeather(); // wait for data to be ready
        console.log(`Temperature: ${weatherData.main.temp}`); //access the values from the return value of getWeather
        console.log(`Feels like: ${weatherData.main.feels_like}`);
        container.className = "grid grid-cols-2 gap-4 bg-gray-200 p-4"

        const section = document.createElement("div"); // Create a new div
        section.textContent = `Section ${weatherData.main.name}`; // Add text content
        section.className = "bg-blue-500 text-white p-4 rounded shadow"; 

        
      }

      catch (error) {
        console.error("Error in search", error)
      }
  
}
/*Search();*/