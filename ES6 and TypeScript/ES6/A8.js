class Acccount{
    constructor(id,name,balance){
        this.id=id,
        this.name=name,
        this.balance=balance
    }
}
class savingAccount extends Acccount{
    constructor(is, name,balance, interest){
        super(is, name, balance);
        this.interest=interest;
    }
}
class currentAccount extends Acccount{
    constructor(id , name , balance , cashCredit){
        super(id , name , balance);
        this.cashCredit=cashCredit;
    }
}

let totalBankBalance = (...accounts) => {
    let totalBalance = 0;
    accounts.forEach((singleAccount) => {
      if (singleAccount.constructor.name === "savingAccount") {
        totalBalance =
          totalBalance + singleAccount.balance + singleAccount.interest;
      } else {
        totalBalance += singleAccount.balance;
        totalBalance -= singleAccount.cashCredit;
      }
    });
    return totalBalance;
  };

  const account1 = new savingAccount(27346924, "pranjal", 120000, 9000);
const account2 = new currentAccount(127649276, "ravi", 20000, 9000);

console.log(
  "Total Balance in Bank is: " +
    totalBankBalance(account1, account2)
);