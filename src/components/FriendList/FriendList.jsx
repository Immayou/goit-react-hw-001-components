import PropTypes from 'prop-types'; 
import { BoxList, BoxItem, Image, FriendName, IsOnlineSymbol } from "./FriendList.styled";

export const FriendList = ({friends}) => {
    return (
    <BoxList>
      {friends.map(({id, name, isOnline, avatar}) => (
        <BoxItem key = {id}>
        <IsOnlineSymbol active={isOnline === true}></IsOnlineSymbol>
        <Image src={avatar} alt="User avatar" width="48" />
        <FriendName>{name}</FriendName>
      </BoxItem>))}
    </BoxList>
    )
}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
          }),
    )
    
};