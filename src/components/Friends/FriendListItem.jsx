import PropTypes from 'prop-types';
import { Status, Avatar, UserName } from './Friends.styled';

export default function FriendListItem({ avatar, name, status }) {
  return (
    <>
      <Status status={status}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <UserName>{name}</UserName>
    </>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
