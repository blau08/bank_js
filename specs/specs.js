describe("Account", function() {
  it("create a bank account object with these name and balance", function() {
    var testAccount = new Account("Jon Snow", 2000);
    expect(testAccount.accountName).to.equal("Jon Snow");
    expect(testAccount.accountBalance).to.equal(2000);
  });
});
