async function getWeather() {
try
{
const apikey = '';
let city = document.getElementById("City").value;

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
    return data;
  } 
  catch (error) {
    console.error('Failed to fetch weather data:', error);
  }
};

function ShowElement(data) {
  const element = document.getElementById("cityDiv");
  const city1 = document.createElement("city1");
  city1.innerHTML = `
      <h1>${data.name}</h1>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Weather: ${data.weather[0].description}</p>

  `;
  element.appendChild(city1);
  




  
}


async function Search() {
  
  try{
  const search = document.getElementById("search");
 search.addEventListener("click", async() => {
 
  const Results = await getWeather();
  ShowElement(Results);

});
 }

 catch (error) {
  console.error('Failed to fetch weather data:', error);
}

 
}
Search();