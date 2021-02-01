export const addTransaction = (transaction, accountId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/accounts/${accountId}/transactions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transaction),
    })
      .then((res) => res.json())
      .then((account) =>
        dispatch({ type: "ADD_TRANSACTION", payload: account })
      );
  };
};
