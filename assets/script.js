let button = document.getElementById('clear-history')
let temp = document.getElementById('temperature')
let humidity = document.getElementById('humidity')
let wind = document.getElementById('wind-speed')
let UV = document.getElementById('UV-index')


const APIkey = "d678ed6580ed3fef714cdd09fd04473f"
const URL = "http://api.openweathermap.org/data/2.5/"

button.addEventListener('click', function(){
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=33.7490&lon=84.3880&exclude={part}&appid=d678ed6580ed3fef714cdd09fd04473f")
    // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&APPID=${APIKey}`)
    .then(res => {
        if (res.ok) {
            console.log('Success')
        } else {
            console.log("Not Successful")
        }
    })
    .then(data => console.log(data))
    .then(error => console.log('ERROR'))
  }
)