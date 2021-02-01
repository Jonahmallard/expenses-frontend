import React from "react";
import { connect } from "react-redux";
import { addTransaction } from "../actions/addTransactions";

class TransactionForm extends React.Component {
  state = {
    kind: "deposit",
    amount: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTransaction(this.state, this.props.account.id);
    this.setState({
      kind: "deposit",
      amount: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Transaction Type: </label>
          <select
            name="kind"
            value={this.state.kind}
            onChange={this.handleChange}
          >
            <option>deposit</option>
            <option>withdraw</option>
          </select>
          &nbsp;
          <label>Transaction Amount: </label>
          <input
            type="text"
            name="amount"
            value={this.state.amount}
            onChange={this.handleChange}
          />
          &nbsp;
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default connect(null, { addTransaction })(TransactionForm);
