// * First thing we do is get the input from the DOM
console.log("Se actualiza?")

const $input = document.querySelector("input");



$input.addEventListener("keydown", (e) => {


    if (e.key === "Enter") {
        console.log("Ahora esto se ve")
        getCoordinates("Madrid")
    }
})

async function getCoordinates(cityName) {
    const response = await fetch("https://geocoding-api.open-meteo.com/v1/search?name=Madrid&count=1")
    const data = await response.json()
    console.log(data)
}

