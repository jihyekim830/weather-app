import useFetch from './useFetch.js';
import buildForecastUrl from '@utils/buildForecastUrl.js';
import formatDate from '@utils/formatDate.js';
import { ENDPOINTS } from '@constants/urls.js';

export default function useFiveDayForecast({ lat, lon }) {
  const { data, isLoading, error } = useFetch(
    buildForecastUrl({ endpoint: ENDPOINTS.FIVEDAY_FORECAST, lat, lon })
  );
  const dailyForecastMap = new Map();
  const fiveDayForecast = [];

  if (!data) return { fiveDayForecast: null, isLoading, error };

  for (const weather of data.list) {
    if (!isTodaysWeather({ weather }))
      addForecastToMap({ map: dailyForecastMap, weather });
  }

  for (const [_, forecasts] of dailyForecastMap) {
    forecasts.sort((a, b) => a.main.temp - b.main.temp);

    const dailyForecast = getDailyForecast({ forecasts });
    fiveDayForecast.push(dailyForecast);
  }

  return { fiveDayForecast, isLoading, error };
}

function isTodaysWeather({ weather }) {
  return new Date(weather.dt_txt).getDate() === new Date().getDate();
}

function addForecastToMap({ map, weather }) {
  const day = new Date(weather.dt_txt).getDate();

  if (map.has(day)) map.get(day).push(weather);
  else map.set(day, [weather]);
}

function getDailyForecast({ forecasts }) {
  const maxTempForecast = forecasts.at(-1);

  return {
    date: formatDate({ date: maxTempForecast.dt_txt }),
    minTemp: forecasts[0].main.temp,
    maxTemp: maxTempForecast.main.temp,
    iconCode: maxTempForecast.weather[0].icon,
    description: maxTempForecast.weather[0].description,
  };
}
