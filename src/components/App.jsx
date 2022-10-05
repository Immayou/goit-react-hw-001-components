import { Profile } from "./Profile";
import user from '../data-information/user'

export const App = () => {
  return (
    <div>
      <Profile user={user}/>
    </div>
  );
};
