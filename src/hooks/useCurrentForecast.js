import useFetch from './useFetch';
import buildForecastUrl from '@utils/buildForecastUrl';
import { ENDPOINTS } from '@constants/urls';

export default function useCurrentForecast({ lat, lon }) {
  const { data, isLoading, error } = useFetch(
    buildForecastUrl({ endpoint: ENDPOINTS.CURRENT_FORECAST, lat, lon })
  );

  if (!data) return { currentForecast: null, isLoading, error };

  const currentForecast = {
    temp: data.main.temp,
    iconCode: data.weather[0].icon,
    description: data.weather[0].description,
    city: data.name,
  };
  return { currentForecast, isLoading, error };
}
