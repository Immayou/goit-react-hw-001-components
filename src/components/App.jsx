import { Profile } from "./Profile";
import user from '../data-information/user'

export const App = () => {
 const { username, tag, location, avatar, stats } = user
  return (
    <>
      <Profile 
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
          followers={stats.followers}
          views={stats.views}
          likes={stats.likes}/>
    </>
  );
};
