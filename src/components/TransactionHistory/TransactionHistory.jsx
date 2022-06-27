import PropTypes from 'prop-types';
import { Table, Row, HeaderCell, Cell } from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <Table>
      <thead>
        <Row>
          <HeaderCell>Type</HeaderCell>
          <HeaderCell>Amount</HeaderCell>
          <HeaderCell>Currency</HeaderCell>
        </Row>
      </thead>

      <tbody>
        {items.map(item => {
          return (
            <Row key={item.id}>
              <Cell>{item.type}</Cell>
              <Cell>{item.amount}</Cell>
              <Cell>{item.currency}</Cell>
            </Row>
          );
        })}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
