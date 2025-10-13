import { API_BASE_URL } from '@constants/urls';

export default function buildForecastUrl({ endpoint, lat, lon }) {
  const searchParams = new URLSearchParams({
    lat,
    lon,
    appid: import.meta.env.VITE_API_KEY,
    units: 'metric',
    lang: 'kr',
  });

  return `${API_BASE_URL}/${endpoint}?${searchParams.toString()}`;
}
