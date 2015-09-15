describe("Account", function() {
  it("create a bank account object with these name and balance", function() {
    var testAccount = new Account("Jon Snow", 2000);
    expect(testAccount.accountName).to.equal("Jon Snow");
    expect(testAccount.accountBalance).to.equal(2000);
  });

  it("will add money to the balance when you deposit", function() {
    var testAccount = new Account("Jon Snow", 2000);
    expect(testAccount.deposit(500)).to.equal(2500);
  });

  it("will take away money to the balance when you withdraw", function() {
    var testAccount = new Account("Jon Snow", 2000);
    expect(testAccount.withdraw(500)).to.equal(1500);
  });
});
