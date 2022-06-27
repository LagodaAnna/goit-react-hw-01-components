import PropTypes from 'prop-types';

import {
  Container,
  Description,
  Avatar,
  UserName,
  UserTag,
  UserLocation,
  StatsContainer,
  StatsItem,
  StatLabel,
} from './Profile.styled';

export default function Profile(props) {
  const {
    avatar,
    username,
    tag,
    location,
    stats: { followers, views, likes },
  } = props;

  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </Description>

      <StatsContainer>
        <StatsItem>
          <StatLabel>Followers</StatLabel>
          <span>{followers}</span>
        </StatsItem>
        <StatsItem>
          <StatLabel>Views</StatLabel>
          <span>{views}</span>
        </StatsItem>
        <StatsItem>
          <StatLabel>Likes</StatLabel>
          <span>{likes}</span>
        </StatsItem>
      </StatsContainer>
    </Container>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
