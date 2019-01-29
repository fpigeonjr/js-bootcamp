let myAccount = {
  name: "Frank Pigeon",
  expenses: 0,
  income: 0
};

let addExpense = (account, amount) => {
  account.expenses += amount;
};

addExpense(myAccount, 2.5);
console.log(myAccount);
