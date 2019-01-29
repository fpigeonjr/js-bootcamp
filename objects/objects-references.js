let myAccount = {
  name: "Frank Pigeon",
  expenses: 0,
  income: 0
};

let addExpense = (account, amount) => {
  account.expenses += amount;
};

// addIncome - account, income
let addIncome = (account, amount) => {
  account.income += amount;
};

// resetAccount - reset acct to zero
let resetAccount = account => {
  account.expenses = 0;
  account.income = 0;
  return `account reset`;
};

// getAccountSummary
let getAccountSummary = account => {
  return `account for ${account.name} has $${account.income -
    account.expenses}. $${account.income} in income and $${
    account.expenses
  } expenses.`;
};

// account for Andrew has $900. $1000 income and $100 expenses
addIncome(myAccount, 1000);
addExpense(myAccount, 100);
console.log(getAccountSummary(myAccount));
console.log(resetAccount(myAccount));
console.log(getAccountSummary(myAccount));
