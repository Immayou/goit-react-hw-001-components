import PropTypes from 'prop-types'; 

export const Profile = ({ username, tag, location, avatar, followers, views, likes }) => {
    return (
        <div>
            <img src={avatar} alt='user photo' />
            <h2>{username}</h2>
            <div>
                <p>@{tag}</p>
                <p>{location}</p>
            </div>
            <ul>
                <li>
                    <h3>Followers</h3>
                    <p>{followers}</p></li>
                <li>
                    <h3>Views</h3>
                    <p>{views}</p></li>
                <li>
                    <h3>Likes</h3>
                    <p>{likes}</p></li>
            </ul>
        </div>
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



