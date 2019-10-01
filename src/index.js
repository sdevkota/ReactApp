import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import Counter from "./components/counter";

class App extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <section className="hero-section">
          <Counter />
        </section>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
