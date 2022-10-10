import { Wrapper } from "./App.styled";

import { Profile } from "../Profile/Profile";
import user from '../../data-information/user';

import { Statistics } from "../Statistics/Statistics";
import data from '../../data-information/data-json';

import { FriendList } from "../FriendList/FriendList";
import friends from '../../data-information/friends';

import { TransactionHistory } from "../TransactionHistory/TransactionHistore";
import transactions from '../../data-information/transactions';

export const App = () => {
 const { username, tag, location, avatar, stats } = user
  return (
    <Wrapper>
      <Profile 
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
          stats={stats}/>

       <Statistics title="Upload stats" stats={data}/>
       
       <FriendList friends={friends}/>
       
       <TransactionHistory items={transactions}/>
    </Wrapper>

  );
};

