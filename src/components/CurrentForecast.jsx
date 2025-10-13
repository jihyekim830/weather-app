import styled from 'styled-components';
import useCurrentForecast from '@hooks/useCurrentForecast';
import { theme } from '@styles/theme';
import { flexMixin, fontMixin } from '@styles/mixins';
import { loading } from '@styles/animations';

const Container = styled.section`
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  margin-bottom: 2rem;
`;

const Forecast = styled.article`
  max-width: 350px;
  height: 150px;
  padding: 1rem;
  border-radius: 8px;
  margin: 0 auto;
  ${flexMixin({ justify: 'center', align: 'center', gap: '2rem' })}
  background-color: ${theme.colors.card};
  box-shadow: 1px 1px 2px ${theme.colors.shadow};

  p:first-child {
    ${fontMixin({ size: '1.2rem', weight: 'bold' })}
  }
`;

const ForecastContent = styled.div`
  flex: 1;
  ${flexMixin({ align: 'center', justify: 'flex-end' })}

  img {
    width: 120px;
  }

  p {
    ${fontMixin({ size: '1.3rem', weight: 'bold' })}
  }
`;

const Loading = styled.p`
  animation: ${loading} 1s ease-in-out infinite;
`;

const ErrorMessage = styled.div`
  ${flexMixin({ direction: 'column', justify: 'center', align: 'center' })}

  p:last-child {
    ${fontMixin({ size: '1.2rem' })}
  }
`;

function CurrentForecast({ location }) {
  const { currentForecast, isLoading, error } = useCurrentForecast({
    lat: location.lat,
    lon: location.lon,
  });

  return (
    <Container>
      <Title>오늘의 날씨</Title>
      <Forecast>
        {isLoading && <Loading>Loading...</Loading>}
        {error && (
          <ErrorMessage>
            <p>{error.message}</p>
            <p>잠시 후에 다시 시도해 주세요.</p>
          </ErrorMessage>
        )}
        {currentForecast && (
          <>
            <p>{currentForecast.city}</p>
            <ForecastContent>
              <img
                src={`https://openweathermap.org/img/wn/${currentForecast.iconCode}@2x.png`}
                alt={currentForecast.description}
                title={currentForecast.description}
              />
              <p>{currentForecast.temp}°C</p>
            </ForecastContent>
          </>
        )}
      </Forecast>
    </Container>
  );
}

export default CurrentForecast;
