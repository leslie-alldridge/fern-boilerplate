import React from "react";
import Header from "./Header";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>React is live here!</p>
        <Header />
      </div>
    );
  }
}

export default App;
