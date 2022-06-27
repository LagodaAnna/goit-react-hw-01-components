import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 auto;
  margin-bottom: ${props => props.theme.space[5]};
  max-width: 300px;
  border: ${props => `1px solid ${props.theme.colors.mainText}`};
`;

export const Title = styled.h2`
  margin: ${props => props.theme.space[0]};
  padding: ${props => props.theme.space[4]};
  text-align: center;
  color: ${props => props.theme.colors.mainText};
  text-transform: uppercase;
  border-bottom: ${props => `1px solid ${props.theme.colors.mainText}`};
`;

export const StatsContainer = styled.ul`
  margin: ${props => props.theme.space[0]};
  padding: ${props => props.theme.space[0]};
  display: flex;
  list-style: none;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.violet};
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: 20%;
  padding: ${props => props.theme.space[3]};
  text-align: center;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.secondaryLightText};

  &:not(:last-child) {
    border-right: ${props => `1px solid ${props.theme.colors.mainText}`};
  }
`;

export const Label = styled.span`
  margin-bottom: ${props => props.theme.space[2]};
`;
