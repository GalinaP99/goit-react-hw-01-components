import './App.css';
import Profile from './components/Profile';
import user from './data/user.json';
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
  );
}

export default App;

