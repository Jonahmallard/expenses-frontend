import React from "react";
import { connect } from "react-redux";
import { deleteTransaction } from "../actions/deleteTransactions";

const Transactions = (props) => {
  const handleDelete = (transaction) => {
    props.deleteTransaction(transaction.id, transaction.account_id);
  };

  return (
    <div>
      {props.transactions &&
        props.transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.kind} - ${transaction.amount}
            &nbsp;
            <button onClick={() => handleDelete(transaction)}>Delete</button>
          </li>
        ))}
    </div>
  );
};

export default connect(null, { deleteTransaction })(Transactions);
