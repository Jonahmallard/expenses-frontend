import React from "react";
import AccountPage from "./AccountPage";

const AccountsList = (props) => {
  return (
    <div>
      {props.accounts.map((account) => (
        <div key={account.id}>
          <AccountPage account={account} />
        </div>
      ))}
    </div>
  );
};

export default AccountsList;
