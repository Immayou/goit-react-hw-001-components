
export const Profile = ({user}) => {
    const { username, tag, location, avatar, stats: { followers, views, likes}} = user
    return (
        <div>
            <img src="{avatar}" alt="image" />
            <h2>{username}</h2>
            <div>
                <p>{tag}</p>
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
    );
}