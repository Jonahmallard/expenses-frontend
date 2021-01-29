import React from "react";
import AccountForm from "../components/AccountForm";
import AccountsList from "../components/AccountsList";

export default class AccountsContainer extends React.Component {
  render() {
    return (
      <div>
        <AccountsList />
        <AccountForm />
      </div>
    );
  }
}
