const bankingReducer = (state = 0, action) => {
  switch (action.type) {
    case "DEPOSIT":
      return state + action.payload.amount;

    case "WITHDRAW":
      return state - action.payload.amount;

    case "COLLECT_INTEREST":
      return state * 1.03; // Increase the state (balance) by 3%

    case "DELETE_ACCOUNT":
      return 0;

    default:
      return state;
  }
};

export default bankingReducer;

/*
Depost : 

{
    type : "DEPOSIT",
    payload :{
        amount : 100
    }
}
------------------------

Withdraw : 

{
    type : "WITHDRAW",
    payload :{
        amount : 50
    }
}
------------------------

Collect Interest : 

{
    type : "COLLECT_INTEREST",
}
------------------------

Delete Account : 

{
    type : "DELETE_ACCOUNT",
}
------------------------

*/
