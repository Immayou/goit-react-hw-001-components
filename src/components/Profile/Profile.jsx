import PropTypes from 'prop-types'; 
import { Container, Image, TopBox, InfoMainText, InfoText, BottomBox, BottomBoxItem, BottomMainText, BottomSecondaryText } from "./Profile.styled";

export const Profile = ({ username, tag, location, avatar, followers, views, likes }) => {
    return (
<Container>
  <TopBox>
    <Image
      src={avatar} 
      alt="User avatar"
      class="avatar"
    />
    <InfoMainText>{username}</InfoMainText>
    <InfoText>@{tag}</InfoText>
    <InfoText>{location}</InfoText>
  </TopBox>

  <BottomBox>
    <BottomBoxItem>
      <BottomMainText>Followers</BottomMainText>
      <BottomSecondaryText>{followers}</BottomSecondaryText>
    </BottomBoxItem>
    <BottomBoxItem>
      <BottomMainText>Views</BottomMainText>
      <BottomSecondaryText>{views}</BottomSecondaryText>
    </BottomBoxItem>
    <BottomBoxItem>
      <BottomMainText>Likes</BottomMainText>
      <BottomSecondaryText>{likes}</BottomSecondaryText>
    </BottomBoxItem>
  </BottomBox>
</Container>
    )
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
};



