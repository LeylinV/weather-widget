import { FormattedWeatherData } from "@/types/FormattedWeatherData";
import { WeatherData } from "@/types/WeatherData";
import { getWindDirection } from "./getWindDirection";
import { getDewPoint } from "./getDewPoint";
  
  export function getFormattedWeather(data: WeatherData): FormattedWeatherData {
    const cityName = `${data.name}, ${data.sys.country}`;
    const feelsLike = `Feels like. ${Math.round(data.main.feels_like)}°C.`;
    const smallDescription = `${data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)}`;
    const description = `${feelsLike} ${smallDescription}`;
    const windSpeed = `${data.wind.speed.toFixed(1)}m/s ${getWindDirection(data.wind.deg)}`;
    const pressure = `${data.main.pressure}hPa`;
    const humidity = `${data.main.humidity}%`;
    const tempCelsius = Math.round(data.main.temp);
    const temp = `${Math.round(tempCelsius)}°C`;
    const dewPointCelsius = Math.round(getDewPoint(Number(tempCelsius), data.main.humidity));
    const dewPoint = `${dewPointCelsius}°C`;
    const visibility = `${(data.visibility/1000).toFixed(1)} km`;
    const imgUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  
    return {
      cityName,
      description,
      windSpeed,
      pressure,
      humidity,
      temp,
      dewPoint,
      visibility,
      imgUrl
    };
  }
  