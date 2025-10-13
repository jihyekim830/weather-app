import styled from 'styled-components';
import useFiveDayForecast from '@hooks/useFiveDayForecast';
import Forecast from './Forecast';
import { flexMixin, fontMixin } from '@styles/mixins';
import { loading } from '@styles/animations';

const Title = styled.h2`
  margin-bottom: 2rem;
`;

const ForecastContainer = styled.ul`
  margin: 0 auto;
  ${flexMixin({ justify: 'center', gap: '0.8rem' })}
  list-style: none;
`;

const Loading = styled.li`
  width: 660px;
  height: 154px;
  line-height: 154px;
  ${fontMixin({ size: '1.2rem', weight: 'bold' })}
  animation: ${loading} 1s ease-in-out infinite;
`;

const ErrorMessage = styled.li`
  height: 150px;
  ${flexMixin({ direction: 'column', justify: 'center', align: 'center' })}

  p:first-child {
    ${fontMixin({ size: '1.3rem', weight: 'bold' })}
  }

  p:last-child {
    ${fontMixin({ size: '1.2rem' })}
  }
`;

function FiveDayForecast({ location }) {
  const { fiveDayForecast, isLoading, error } = useFiveDayForecast({
    lat: location.lat,
    lon: location.lon,
  });

  return (
    <section>
      <Title>5일 예보</Title>
      <ForecastContainer>
        {isLoading && <Loading>Loading...</Loading>}
        {error && (
          <ErrorMessage>
            <p>{error.message}</p>
            <p>잠시 후에 다시 시도해 주세요.</p>
          </ErrorMessage>
        )}
        {fiveDayForecast &&
          fiveDayForecast.map((forecast) => (
            <Forecast
              key={forecast.date}
              date={forecast.date}
              maxTemp={forecast.maxTemp}
              minTemp={forecast.minTemp}
              iconCode={forecast.iconCode}
              description={forecast.description}
            />
          ))}
      </ForecastContainer>
    </section>
  );
}

export default FiveDayForecast;
