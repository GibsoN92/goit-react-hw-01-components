import React from "react";
import Profile from "./Profile/Profile";
import user from "./../data/user.json";
import Statistics from "./Statistics/Statistics";
import data from "./../data/data.json";
import FriendList from "./FriendList/FriendList";
import friends from "./../data/friends.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "./../data/transactions.json";

const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" data={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
