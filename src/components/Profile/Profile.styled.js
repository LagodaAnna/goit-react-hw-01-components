import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  margin-bottom: ${props => props.theme.space[5]};
  max-width: 300px;
  border: ${props => `1px solid ${props.theme.colors.lightGrey}`}; ;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: ${props => props.theme.space[4]};
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.mainText};
  font-weight: ${props => props.theme.fontWeights.bold}; ;
`;

export const Avatar = styled.img`
  margin-bottom: ${props => props.theme.space[3]};
  max-width: 200px;
  height: auto;
`;

export const UserName = styled.p`
  margin: ${props => props.theme.space[0]};
  margin-bottom: ${props => props.theme.space[3]}; ;;
`;

export const UserTag = styled.p`
  margin: ${props => props.theme.space[0]};
  margin-bottom: ${props => props.theme.space[3]}; ;;
`;

export const UserLocation = styled.p`
  margin: ${props => props.theme.space[0]}; ;;
`;

export const StatsContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: ${props => props.theme.space[3]};
  padding-left: ${props => props.theme.space[4]};
  padding-right: ${props => props.theme.space[4]};
  padding-bottom: ${props => props.theme.space[5]};
  margin: ${props => props.theme.space[0]};
  list-style: none;
  background-color: ${props => props.theme.colors.lightGrey};
  font-weight: ${props => props.theme.fontWeights.bold};
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 33.333%;
`;

export const StatLabel = styled.span`
  margin-bottom: ${props => props.theme.space[3]};
  color: ${props => props.theme.colors.mainText};
`;
