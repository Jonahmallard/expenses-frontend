import React from "react";

const AccountPage = (props) => {
  let account = props.accounts[props.match.id - 1];

  return (
      <li>
        {account ? account.name : null} - {account ? account.balance : null}
      </li>
  );
};

export default AccountPage;
