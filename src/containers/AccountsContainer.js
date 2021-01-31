import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { fetchAccounts } from "../actions/fetchAccounts";
import AccountForm from "../components/AccountForm";
import AccountPage from "../components/AccountPage";
import AccountsList from "../components/AccountsList";

class AccountsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchAccounts();
  }

  render() {
    return (
      <div>
        <Route path="/accounts/new" component={AccountForm} />
        <Route
          path="/accounts/:id"
          render={(routerProps) => (
            <AccountPage {...routerProps} accounts={this.props.accounts} />
          )}
        />
        <Route
          exact
          path="/accounts"
          render={(routerProps) => (
            <AccountsList {...routerProps} accounts={this.props.accounts} />
          )}
        />
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
