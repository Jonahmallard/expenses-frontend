export default function accountReducer(state = { accounts: [] }, action) {
  switch (action.type) {
    case "FETCH_ACCOUNTS":
      return { accounts: action.payload };
    case "ADD_ACCOUNT":
      return { ...state, accounts: [...state.accounts, action.payload] };
    case "ADD_TRANSACTION":
      let account = state.accounts.map((account) => {
        if (account.id === action.payload.id) {
          return action.payload;
        } else {
          return account;
        }
      });
      return { ...state, accounts: account };
    case "DELETE_TRANSACTION":
      let deletedAccount = state.accounts.map((account) => {
        if (account.id === action.payload.id) {
          return action.payload;
        } else {
          return account;
        }
      });
      return { ...state, accounts: deletedAccount };
    default:
      return state;
  }
}
