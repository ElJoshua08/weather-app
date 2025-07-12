// * First thing we do is get the input from the DOM
const $input = document.querySelector("input");

$input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
       getWeatherData($input.value);
    }
})


async function getWeatherData(cityName) {

    const city = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`
    ).then(async (res) => await res.json()).then(
        data => data.results[0]
    );

    console.log(city)

    const response =
      await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current=temperature_2m,weathercode,apparent_temperature&hourly=temperature_2m,apparent_temperature,precipitation_probability,weathercode,uv_index,windspeed_10m&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,weathercode&timezone=auto
`);
    
    const data = await response.json()

    console.log(data)

}