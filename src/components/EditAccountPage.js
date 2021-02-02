import React from "react";
import { connect } from "react-redux";
import { editAccount } from "../actions/editAccount";

class EditAccountPage extends React.Component {
  state = { name: "", balance: "" };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let account = { ...this.state, id: this.props.account.id };
    this.props.editAccount(account);
    this.setState({
      name: "",
      balance: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Edit Account Name: </label>
          <input
            type="text"
            placeholder="New Name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          &nbsp;
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default connect(null, { editAccount })(EditAccountPage);
