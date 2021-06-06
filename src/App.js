import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();
    // here we initilize the state
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((m) =>
      m.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        {/* onChange is a react synthetic event, maps to the native onchange, but ensures support across browsers */}
        <input
          type="search"
          placeholder="search monsters"
          onChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
