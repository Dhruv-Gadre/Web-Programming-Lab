import React from "react";

class UserGreeting extends React.Component {
  render() {
    return (
      <div>
        <h2>Hello, {this.props.firstName} {this.props.lastName}!</h2>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <UserGreeting firstName="Dhruv" lastName="Gadre" />
    </div>
  );
}

export default App;