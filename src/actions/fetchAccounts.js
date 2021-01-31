export default function fetchAccounts() {
  return (dispatch) => {
    fetch("http://localhost:3000/accounts")
      .then((res) => res.json())
      .then((accounts) =>
        dispatch({
          type: "FETCH_ACCOUNTS",
          payload: accounts,
        })
      );
  };
}
