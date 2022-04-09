import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ProjectName: "ShoppingCart",
      description: "Cart containing different things"
    };
  }
  render() {
    return (
      <>
        <h2>Project name is: {this.state.ProjectName}</h2>
        <h3>Project description is: {this.state.description}</h3>
      </>
    );
  }
}
export default App;
