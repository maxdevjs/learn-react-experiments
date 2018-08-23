// https://reactjs.org/docs/faq-functions.html

import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const A = 65; // ASCII character code

class Alphabet extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      justClicked: null,
      letters: Array.from({ length: 26 }, (_, i) => String.fromCharCode(A + i))
    };
  }

  handleClick(e) {
    this.setState({
      justClicked: e.target.dataset.letter
    });
  }

  render() {
    let className = "";
    if (this.props.clicked !== null) {
      className += " clicked";
    }

    return (
      <div>
        Just clicked: {this.state.justClicked}
        <ul>
          {this.state.letters.map(letter => (
            <li key={letter} data-letter={letter} onClick={this.handleClick}>
              {letter}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<Alphabet />, document.querySelector("#root"));
