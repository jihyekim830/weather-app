import { useEffect, useState } from 'react';

export default function useLocation() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) =>
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        }),
      (err) => {
        console.error(err);

        const message =
          err.code === 1
            ? '위치 접근이 차단되어 있습니다.\n권한 설정을 확인해 주세요.'
            : err.code === 2
            ? '위치 정보를 가져올 수 없습니다.\n잠시 후 다시 시도해주세요.'
            : '지정된 시간 안에 위치 데이터를 받아오지 못했습니다.\n잠시 후 다시 시도해주세요.';
        setError({ message });
      }
    );
  }, []);

  return { location, error };
}
