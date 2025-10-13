import styled from 'styled-components';
import { flexMixin, fontMixin } from '@styles/mixins';
import { theme } from '@styles/theme';

const Container = styled.li`
  max-width: 150px;
  height: 154px;
  padding: 1rem;
  border-radius: 0.6rem;
  ${flexMixin({ direction: 'column', align: 'center' })}
  background-color: ${theme.colors.card};
  box-shadow: 1px 1px 2px ${theme.colors.shadow};

  img {
    width: 80px;
  }

  p {
    ${fontMixin({ size: '0.9rem', weight: 'bold' })}
  }
`;

const Temperature = styled.p`
  ${flexMixin({ gap: '0.2rem' })}

  span:first-child {
    color: ${theme.colors.blue};
  }

  span:last-child {
    color: ${theme.colors.red};
  }
`;

function Forecast({ date, maxTemp, minTemp, iconCode, description }) {
  return (
    <Container>
      <p>{date}</p>
      <img
        src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
        alt={description}
      />
      <Temperature>
        <span>{minTemp}°C</span>
        <span> / </span>
        <span>{maxTemp}°C</span>
      </Temperature>
    </Container>
  );
}

export default Forecast;
