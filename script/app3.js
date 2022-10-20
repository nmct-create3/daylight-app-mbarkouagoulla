// _ = helper functions
function _parseMillisecondsIntoReadableTime(timestamp) {
	//Get hours from milliseconds
	const date = new Date(timestamp * 1000);
	// Hours part from the timestamp
	const hours = '0' + date.getHours();
	// Minutes part from the timestamp
	const minutes = '0' + date.getMinutes();
	// Seconds part from the timestamp (gebruiken we nu niet)
	// const seconds = '0' + date.getSeconds();

	// Will display time in 10:30(:23) format
	return hours.substr(-2) + ':' + minutes.substr(-2); //  + ':' + s
}

// 5 TODO: maak updateSun functie

// 4 Zet de zon op de juiste plaats en zorg ervoor dat dit iedere minuut gebeurt.
let placeSunAndStartMoving = (totalMinutes, sunrise) => {
	// In de functie moeten we eerst wat zaken ophalen en berekenen.
	// Haal het DOM element van onze zon op en van onze aantal minuten resterend deze dag.
	// Bepaal het aantal minuten dat de zon al op is.
	// Nu zetten we de zon op de initiële goede positie ( met de functie updateSun ). Bereken hiervoor hoeveel procent er van de totale zon-tijd al voorbij is.
	// We voegen ook de 'is-loaded' class toe aan de body-tag.
	// Vergeet niet om het resterende aantal minuten in te vullen.
	// Nu maken we een functie die de zon elke minuut zal updaten
	// Bekijk of de zon niet nog onder of reeds onder is
	// Anders kunnen we huidige waarden evalueren en de zon updaten via de updateSun functie.
	// PS.: vergeet weer niet om het resterend aantal minuten te updaten en verhoog het aantal verstreken minuten.
};

// 3 Met de data van de API kunnen we de app opvullen
let showResult = queryResponse => {
	// We gaan eerst een paar onderdelen opvullen
	// Zorg dat de juiste locatie weergegeven wordt, volgens wat je uit de API terug krijgt.
	// Toon ook de juiste tijd voor de opkomst van de zon en de zonsondergang.
	// Hier gaan we een functie oproepen die de zon een bepaalde positie kan geven en dit kan updaten.
	// Geef deze functie de periode tussen sunrise en sunset mee en het tijdstip van sunrise.
};

// 2 Aan de hand van een longitude en latitude gaan we de yahoo wheater API ophalen.
let getAPI = (lat, lon) => {
	// Eerst bouwen we onze url op
	// Met de fetch API proberen we de data op te halen.
	// Als dat gelukt is, gaan we naar onze showResult functie.
};

document.addEventListener('DOMContentLoaded', function() {
	// 1 We will query the API with longitude and latitude.
	getAPI(50.8027841, 3.2097454);
});



// //place sun on left and bottom position
// //based on total time and current time
// const placeSun = (sunrise) => {
//     const now = new Date()
//     const sunriseDate = new Date(sunrise * 1000)
//     // const totalDate = new Date(totalTime * 1000)
//     // const difference = totalDate - now

//     console.log(new Date(sunriseDate - now))

//     const percentage = (now - sunriseDate) / totalTime
//     const sunLeftPosition = percentage
//     const sunBottomPosition = percentage < 50 ? percentage * 2  : 100  percentage

//     sunElement.style.left = `${sunLeftPosition}%`
//     sunElement.style.bottom = `${sunBottomPosition}%`
// }
// const updateTimeAndTimeLeft = (timeLeftTimeStamp) => {
//     sunElement.dataset.time = new Date().toLocaleTimeString([], {
//         hour: '2-digit',
//         minute: '2-digit',
//     })
//     timeLeftElement.innerText = timeLeftTimeStamp
// }
// const setDOMElemetns = () => {
//     sunriseElement = document.querySelector('.js-sunrise')
//     sunsetElement = document.querySelector('.js-sunset')
//     locationElement = document.querySelector('.js-location')

//     sunElement = document.querySelector('.js-sun')
//     timeLeftElement = document.querySelector('.js-time-left')
//     if (!sunriseElement || !sunsetElement || !locationElement || !sunElement || !timeLeftElement) {
//         throw new Error('One or more DOM elements not found')
//     }
// }
// const makeReadableTimeFormatFromTimestamp = (timestamp) => {
//     return new Date(timestamp * 1000).toLocaleTimeString([],{
//         hour: '2-digit',
//         minute: '2-digit',
//     })
// }
// const setLocationData = (city) => {
//     sunsetElement.innerText = makeReadableTimeFormatFromTimestamp(city.sunset)
//     sunriseElement.innerText = makeReadableTimeFormatFromTimestamp(city.sunrise)
//     locationElement.innerText = `${city.name} , ${city.country}`
// }
// const getData = (endpoint) => {
//     return fetch(endpoint)
//     .then((response) => response.json())
//     .catch((error) => console.log(error));
// }
// document.addEventListener('DOMContentLoaded',  async function() {
//     let lat = 40.7591704
//     let long = -74.0392708
//     // 1 We will query the API with longitude and latitude.
//     const apikey = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=3f94f90f0a2e8a001cf72f37c1707325&units=metric&lang=nl&cnt=1`
//     const data = await getData(apikey)
//     console.log(data.city)
//     setDOMElemetns()
//     setLocationData(data.city)

//     // totalTime = data.city.sunset - data.city.sunrise
//     totalTime = new Date ( data.city.sunset -  data.city.sunrise * 1000).getHours()
//     updateTimeAndTimeLeft("TODO")
//     placeSun(data.city.sunrise)
//         // makeReadableTimeFormatFromTimestamp(data.city.sunset - data.city.sunrise))
// })