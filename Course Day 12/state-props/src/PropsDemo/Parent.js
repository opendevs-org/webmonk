import React from "react";
import Child from "./Child";

class Parent extends React.Component {
  state = {
    persons: [
      { id: 1, name: "Alok", age: 29 },
      { id: 2, name: "tech bairn", age: 30 },
      { id: 3, name: "opendevs", age: 31 },
    ],
  };

  changeTheName = (id, name) => {
    const duplicatePersons = [...this.state.persons];
    const position = this.state.persons.findIndex(p => p.id === id);
    duplicatePersons[position].name = name;
    this.setState({
        persons : duplicatePersons
    }) 
  }

  render() {
    let persons = this.state.persons.map((person, index) => {
      return <Child 
                key={index} 
                username={person.name} 
                age={person.age}
                nameChanged = {(name) => this.changeTheName(person.id, name)}
                />;
    });
    return (
      <>
        <div>Props Demo - Parent Component</div>
        <br />
        {persons}
        {/* {this.state.persons.map((person, index) => {
          return <Child key={index} username={person.name} age={person.age} />;
        })} */}

        {/* <Child
          username={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Child
          username={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Child
          username={this.state.persons[2].name}
          age={this.state.persons[2].age}
        /> */}
      </>
    );
  }
}

export default Parent;
