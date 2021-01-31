import React from "react";
import { connect } from "react-redux";
import { addAccount } from "../actions/addAccount";

class AccountForm extends React.Component {
  state = { name: "", balance: "" };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addAccount(this.state);
    this.setState({
      name: "",
      balance: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Account Name: </label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label>Account Balance: </label>
          <input
            type="text"
            placeholder="Enter Balance"
            name="balance"
            value={this.state.balance}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default connect(null, { addAccount })(AccountForm);
