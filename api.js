export async function fetchHoroscope(sign) {
    try {
        const response = await fetch(`http://localhost:3000/horoscope/${sign}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json();
        return data.data.horoscope_data;
    } catch (error) {
        console.error('Error:', error);
        return error.message;
    }
 }
 
 
 export async function fetchWeather(location) {
    try {
        const response = await fetch(`http://localhost:3000/weather/${location}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json();
        
        const condition = data.current.condition.text;
        const tempC = data.current.temp_c;
        const tempF = data.current.temp_f;
        const humidity = data.current.humidity;
 
 
        const todayForecast = data.forecast.forecastday[0].day.condition.text;
        const maxTempC = data.forecast.forecastday[0].day.maxtemp_c;
        const maxTempF = data.forecast.forecastday[0].day.maxtemp_f;
        const minTempC = data.forecast.forecastday[0].day.mintemp_c;
        const minTempF = data.forecast.forecastday[0].day.mintemp_f;

        //set up a flag here to change the returns
 
        return {
           'Current Conditions': condition,
            tempC,
            tempF,
            humidity,
            todayForecast,
            maxTempC,
            maxTempF,
            minTempC,
            minTempF
        };
 
    } catch (error) {
        console.error('Error:', error);
        return error.message;
    }
 }
 
 
        