import React from "react";
import { connect } from "react-redux";
import { fetchAccounts } from "../actions/fetchAccounts";
import AccountForm from "../components/AccountForm";
import AccountsList from "../components/AccountsList";

class AccountsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchAccounts();
  }

  render() {
    return (
      <div>
        <AccountForm />
        <AccountsList accounts={this.props.accounts} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts,
  };
};

export default connect(mapStateToProps, { fetchAccounts })(AccountsContainer);
