import 'bootstrap/dist/css/bootstrap.min.css';

import Profile from '../Profile/Profile'
import Statistics from '../Statistics/Statistics'
import FriendList from '../FriendList/FriendList'
import TransactionHistory from '../TransactionHistory/TransactionHistory'

import friends from '../../data-base/friends.json';
import user from '../../data-base/user.json'
import statisticalData from '../../data-base/statistical-data.json'
import transactions from '../../data-base/transactions.json'

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
