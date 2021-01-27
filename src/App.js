import React from "react";

class App extends React.Component {
  componentDidMount() {
    fetch("http://localhost:3000/api/v1/accounts").then((res) =>
      console.log(res)
    );
  }

  render() {
    return <div className="App">App</div>;
  }
}

export default App;
