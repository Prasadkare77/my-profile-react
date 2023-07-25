import React, { Component } from "react";

class ArrayMapping extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fruits: ["Apple", "Banana", "Orange"],
      persons: [
        {
          name: "John",
          age: 36,
          company: "CodeMind",
        },
        {
          name: "Akshay",
          age: 24,
          company: "infosys",
        },
        {
          name: "Vikas",
          age: 23,
          company: "TCS",
        },
      ],
    };
  }

  render() {
    return (
      <>
        <h2>List rendering in class comp</h2>
        {this.state.fruits.map((fruit, index) => (
          <p key={index}>{fruit}</p>
        ))}

        <h4>Persons list</h4>
        {this.state.persons.map((person, index) => (
          <p key={index}>Name: {person.name}  Age: {person.age} Company:{person.company}</p>
        ))}
      </>
    );
  }
}

export default ArrayMapping;
