import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
 constructor() {
  super();
  // here we initilize the state
  this.state = {
   monsters: []
  };
 }
 componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(users => this.setState({monsters: users}))
 }
 render() {
  return (
   <div className="App">
    {/* the component html-like attributes are passed as props.name */}
    <CardList name="Yihua">
    {/* everything inside the component is passed as props.children */}
     {
      this.state.monsters.map(monster => (<h1 key={monster.id}> { monster.name }</h1>))
     }
    </CardList>
   </div>
  );
 }
}

export default App;
