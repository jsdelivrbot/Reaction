import React, { Component } from "react";

class SearchBar extends Component {
  //defining the initialized state in a class based component; functional components do not have state, only class based do
  //constructor function is called automatically whenever a new instance of the class is created
  constructor(props) {
    //when a method is defined on the parent class, we can call it on the parent class by calling 'super'
    super(props);
    //state is a plain js cobject that exist on any component that is class based- each instance has its own state
    // state is initialized by creating a new object and assigning it to 'this.state'
    // the object that is passed will also contain properties that we want to record on the state
    this.state = { term: "" };
  }

  render() {
    //change event; to tap into it, write 'on' the name of the event, equals, and curly braces
    // always manipulate state with this.setState
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })}
        />
      </div>
    );
  }
}

export default SearchBar;
