import logo from './logo.svg';
import './App.css';
import UserList from './component/UserList.js'
import ItemList from './component/ItemList.js'
import Stocks from './component/Stocks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <UserList name="Split The Bill"/> */}
        <h2>
            Users
        </h2>
        {/* <ItemList/> */}
        <Stocks/>
      </header>
    </div>
  );
}

export default App;
