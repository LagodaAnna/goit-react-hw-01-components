import styled from 'styled-components';

export const Container = styled.ul`
  margin: 0 auto;
  margin-bottom: ${props => props.theme.space[5]};
  max-width: 300px;
  padding: ${props => props.theme.space[0]}; ;
`;

export const FriendCard = styled.li`
  position: relative;
  list-style: none;
  display: flex;
  padding: ${props => props.theme.space[3]};
  border-radius: 10px;
  box-shadow: ${props => `3px 3px 8px 2px ${props.theme.colors.mainText}`};

  &:not(:last-child) {
    margin-bottom: ${props => props.theme.space[4]};
  }
`;

export const Status = styled.span`
  width: 20px;

  &::before {
    position: absolute;
    top: calc(50% - 5px);
    content: ' ';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ status, theme }) => {
      return status ? theme.colors.green : theme.colors.red;
    }};
  }
`;

export const Avatar = styled.img`
  margin-right: ${props => props.theme.space[4]};
`;

export const UserName = styled.p`
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.mainText};
`;
