const api_key = "0000000";
const apiBaseUrl = "https://api.openweathermap.org/data/2.5/weather";

console.log(api_key);
async function Weather(city){
    try{
        const response= await  fetch(`${apiBaseUrl}?q=${city}&appid=${api_key}&units=metric`);
        if (!response.ok) {
            console.log("response.status =", response.status);
            throw new error("Not");
            co
        }
         response = response.json();
        console.log(response);
    }
    catch (error)
    {
        console.error(`Error: ${error.message}`);
    }
}

