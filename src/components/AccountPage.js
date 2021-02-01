import React from "react";
// import { Redirect } from "react-router-dom";

import TransactionsContainer from "../containers/TransactionsContainer";

const AccountPage = (props) => {
  let account = props.accounts[props.match.params.id - 1];

  // let account = props.accounts.filter(
  //   (account) => account.id == props.match.params.id[0]
  // );

  return (
    <div>
      <h1>
        {/* {account ? null : <Redirect to="/accounts" />} */}
        {account ? account.name : null} - {account ? account.balance : null}
      </h1>
      <TransactionsContainer account={account} />
    </div>
  );
};

export default AccountPage;
