import PropTypes from 'prop-types'; 

export const FriendList = ({friends}) => {
    return (
    <ul class="friend-list">
      {friends.map(({id, name, isOnline, avatar}) => (
        <li key = {id} class="item">
        <span class="status">{isOnline}</span>
        <img class="avatar" src={avatar} alt="User avatar" width="48" />
        <p class="name">{name}</p>
      </li>))}
    </ul>
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
