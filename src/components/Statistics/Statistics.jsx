import PropTypes from 'prop-types';
import {
  Container,
  Title,
  StatsContainer,
  StatsItem,
  Label,
} from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <StatsContainer>
        {stats.map(stat => {
          return (
            <StatsItem key={stat.id}>
              <Label>{stat.label}</Label>
              <span>{stat.percentage}</span>
            </StatsItem>
          );
        })}
      </StatsContainer>
    </Container>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
