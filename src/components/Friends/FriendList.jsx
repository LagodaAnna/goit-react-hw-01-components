import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { Container, FriendCard } from './Friends.styled';

export default function FriendList({ friends }) {
  return (
    <Container>
      {friends.map(({ id, avatar, isOnline, name }) => {
        return (
          <FriendCard key={id}>
            <FriendListItem avatar={avatar} status={isOnline} name={name} />
          </FriendCard>
        );
      })}
    </Container>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
