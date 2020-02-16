import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: []
    // imgUrl: "https://picsum.photos/200"
  };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  // above method is replaced by arrow function

  styles = {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  renderTags() {
    // if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag} style={this.styles}>
            {tag}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        {/* <img src={this.state.imgUrl} alt="unavailable" /> */}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.renderTags()}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
