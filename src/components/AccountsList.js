import React from "react";

const AccountsList = (props) => {
  return (
    <div>
      {props.accounts.map((account) => (
        <li key={account.id}>
          {account.name} - {account.balance}
        </li>
      ))}
    </div>
  );
};

export default AccountsList;
