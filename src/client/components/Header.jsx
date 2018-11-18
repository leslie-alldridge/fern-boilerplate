import React from "react";
import { connect } from "react-redux";

import * as actions from "../actions";

class Header extends React.Component {
  constructor() {
    super();
    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    this.props.fetchItems();
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <h1>Hello from Components!</h1>
        <button onClick={this.fetch}>Fetch Items</button>
        <ul>
          {this.props.data &&
            this.props.data.map(item => {
              return (
                <li key={item.id}>
                  {item.id}: {item.title} {item.userId}
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data
  };
};

export default connect(
  mapStateToProps,
  actions
)(Header);
