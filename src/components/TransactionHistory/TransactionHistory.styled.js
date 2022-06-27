import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  margin-bottom: ${props => props.theme.space[5]};
  width: 600px;
  text-align: center;
  border-spacing: ${props => props.theme.space[0]};
  border-left: ${props => `1px solid ${props.theme.colors.lightGreen}`};
  border-right: ${props => `1px solid ${props.theme.colors.lightGreen}`};
  border-radius: 10px;
  overflow: hidden;
`;

export const Row = styled.tr`
  &:nth-child(2n + 1) {
    background-color: ${props => props.theme.colors.lightGreen};
  }
`;

export const Cell = styled.td`
  padding: ${props => props.theme.space[4]};
  border-bottom: ${props => `1px solid ${props.theme.colors.lightGreen}`};
  color: ${props => props.theme.colors.mainText};
  font-weight: ${props => props.theme.fontWeights.bold};
`;

export const HeaderCell = styled.th`
  padding: ${props => props.theme.space[4]};
  background-color: ${props => props.theme.colors.mainText};
  color: ${props => props.theme.colors.secondaryLightText};
`;
