import './App.css';
import Profile from './components/Profile';
import user from './data/user.json';
//import statisticalData from './data/statistics-data.json';
//import friends from 'путь/к/friends.json';
//import transactions from 'путь/к/transactions.json';
function App() {
  return (
    <div className="App">
      <Profile
        // {...user}
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
    /*<Statistics title="Upload stats" stats={statisticalData} />;
<Statistics stats={statisticalData} />;
<FriendList friends={friends} />,
<TransactionHistory items={transactions} />;*/
  );
}

export default App;
