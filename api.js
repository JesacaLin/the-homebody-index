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
        return data.current.condition.text;
 
    } catch (error) {
        console.error('Error:', error);
        return error.message;
    }
 }
 
 
        // const condition = data.current.condition;
        // const tempC = data.current.temp_c;
        // const tempF = data.current.temp_f;
        // const humidity = data.current.humidity;
 
 
        // const todayForecast = data.forecast.forecastday[0].day.condition;
        // const maxTempC = data.forecast.forecastday[0].day.maxtemp_c;
        // const maxTempF = data.forecast.forecastday[0].day.maxtemp_f;
        // const minTempC = data.forecast.forecastday[0].day.mintemp_c;
        // const minTempF = data.forecast.forecastday[0].day.mintemp_f;
 
 
        // const alert = data.alerts ? data.alerts.alert[0].desc : null;
 
 
        // return {
        //     condition,
        //     tempC,
        //     tempF,
        //     humidity,
        //     todayForecast,
        //     maxTempC,
        //     maxTempF,
        //     minTempC,
        //     minTempF,
        //     alert
        // };