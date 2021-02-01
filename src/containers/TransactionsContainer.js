import React from "react";
import TransactionForm from "../components/TransactionForm";
import Transactions from "../components/Transactions";

class TransactionsContainer extends React.Component {
  render() {
    return (
      <div>
        <TransactionForm />
        <Transactions
          transactions={this.props.account && this.props.account.transactions}
        />
      </div>
    );
  }
}

export default TransactionsContainer;
