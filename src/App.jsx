import styled, { createGlobalStyle } from 'styled-components';
import useLocation from '@hooks/useLocation';
import CurrentForecast from '@components/CurrentForecast';
import FiveDayForecast from '@components/FiveDayForecast';
import { theme } from '@styles/theme';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    text-align: center;
    box-sizing: border-box;
  }

  body {
    background-color: ${theme.colors.bg};
  }
`;

const Title = styled.h1`
  margin: 3rem;
`;

const ErrorMessage = styled.div`
  width: 500px;
  padding: 1rem;
  border-radius: 10px;
  margin: 0 auto;
  box-shadow: 1px 1px 2px ${theme.colors.shadow};
  background-color: ${theme.colors.card};
  font-size: 1.1rem;
  white-space: pre-wrap;
`;

function App() {
  const { location, error } = useLocation();

  return (
    <>
      <GlobalStyle />
      <header>
        <Title>날씨 정보 🌡️</Title>
      </header>
      <main>
        {error && (
          <ErrorMessage>
            <p>{error.message}</p>
          </ErrorMessage>
        )}
        {location && <CurrentForecast location={location} />}
        {location && <FiveDayForecast location={location} />}
      </main>
    </>
  );
}

export default App;
