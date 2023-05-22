import logo from './logo.svg';
import './App.css';
import BusinessList from './BusinessList.js';
import SearchBar from './SearchBar.js'

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
         <SearchBar />
         <BusinessList />
      </header>
    </div>
  );
}

export default App;
