import React from "react";
import { Redirect } from "react-router-dom";

const AccountPage = (props) => {
  let account = props.accounts[props.match.params.id - 1];

  return (
    <li>
      {account ? null : <Redirect to="/accounts" />}
      {account ? account.name : null} - {account ? account.balance : null}
    </li>
  );
};

export default AccountPage;
