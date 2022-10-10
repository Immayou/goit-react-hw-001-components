import PropTypes from 'prop-types'; 
import { BoxList } from "./FriendList.styled";
import { FriendListItem } from './FriendListItem';

export const FriendList = ({friends}) => {
    return (
    <BoxList>
      {friends.map(({id, name, isOnline, avatar}) => (
        <FriendListItem
        avatar={avatar}
        name={name}
        isOnline={isOnline}
        key={id}/>
        ))}
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
