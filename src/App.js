import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
 constructor() {
  super();
  // here we initilize the state
  this.state = {
   monsters: [],
   searchField: '',
  };
 }
 // lifecycle method
 componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
   .then((response) => response.json())
   .then((users) => this.setState({ monsters: users }));
 }
 handleChange = (e) => {
  this.setState({ searchField: e.target.value });
 };
 render() {
  const { monsters, searchField } = this.state;
  const filteredMonsters = monsters.filter((m) =>
   m.name.toLowerCase().includes(searchField.toLowerCase())
  );
  return (
   <div className="App">
    <SearchBox
     placeholder="search monsters"
     handleChange={this.handleChange}
    ></SearchBox>
    <CardList monsters={filteredMonsters}></CardList>
   </div>
  );
 }
}

export default App;
