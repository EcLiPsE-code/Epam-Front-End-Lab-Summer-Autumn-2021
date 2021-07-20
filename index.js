const axios = require('axios')

const api_key = '21b9e976af5d1abf548e5fc9689fa8bc'

axios.get(`http://api.openweathermap.org/data/2.5/weather?id=524901&lang=ru&appid=${api_key}`)
    .then(response => {
        console.log(`Country: ${response.data.name}`)
        console.log(`Temperature: ${Math.round(response.data.main.temp - 273)} Celsius`)
        console.log(`Description weather: ${response.data.weather[0]['description']}`)
    })
    .catch(err => {
        console.log(`Error request : ${err.description}`)
    })
