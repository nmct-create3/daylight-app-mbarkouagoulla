let sunriseElement
let sunsetElement
let locationElement
let sunElement 
let timeLeftElement
let totalTime = 0

//place sun on left and bottom position
//based on total time and current time
const placeSun = (sunrise) => {
    const now = new Date()
    const sunriseDate = new Date(sunrise * 1000)
    // const totalDate = new Date(totalTime * 1000)
    // const difference = totalDate - now

    console.log(new Date(sunriseDate - now))

    const percentage = (now - sunriseDate) / totalTime
    const sunLeftPosition = percentage
    const sunBottomPosition = percentage < 50 ? percentage * 2  : 100  percentage

    sunElement.style.left = `${sunLeftPosition}%`
    sunElement.style.bottom = `${sunBottomPosition}%`
}
const updateTimeAndTimeLeft = (timeLeftTimeStamp) => {
    sunElement.dataset.time = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
    })
    timeLeftElement.innerText = timeLeftTimeStamp
}
const setDOMElemetns = () => {
    sunriseElement = document.querySelector('.js-sunrise')
    sunsetElement = document.querySelector('.js-sunset')
    locationElement = document.querySelector('.js-location')

    sunElement = document.querySelector('.js-sun')
    timeLeftElement = document.querySelector('.js-time-left')
    if (!sunriseElement || !sunsetElement || !locationElement || !sunElement || !timeLeftElement) {
        throw new Error('One or more DOM elements not found')
    }
}
const makeReadableTimeFormatFromTimestamp = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString([],{
        hour: '2-digit',
        minute: '2-digit',
    })
}
const setLocationData = (city) => {
    sunsetElement.innerText = makeReadableTimeFormatFromTimestamp(city.sunset)
    sunriseElement.innerText = makeReadableTimeFormatFromTimestamp(city.sunrise)
    locationElement.innerText = `${city.name} , ${city.country}`
}
const getData = (endpoint) => {
    return fetch(endpoint)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
document.addEventListener('DOMContentLoaded',  async function() {
    let lat = 40.7591704
    let long = -74.0392708
    // 1 We will query the API with longitude and latitude.
    const apikey = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=3f94f90f0a2e8a001cf72f37c1707325&units=metric&lang=nl&cnt=1`
    const data = await getData(apikey)
    console.log(data.city)
    setDOMElemetns()
    setLocationData(data.city)

    // totalTime = data.city.sunset - data.city.sunrise
    totalTime = new Date ( data.city.sunset -  data.city.sunrise * 1000).getHours() 
    updateTimeAndTimeLeft("TODO")
    placeSun(data.city.sunrise)
        // makeReadableTimeFormatFromTimestamp(data.city.sunset - data.city.sunrise))
})