function Account(accountName, accountBalance) {
  this.accountName = accountName;
  this.accountBalance = accountBalance;
};

Account.prototype.deposit = function(amount) {
  return this.accountBalance += amount;
};

Account.prototype.withdraw = function(amount) {
  return this.accountBalance -= amount;
};

$(document).ready(function() {
  $("form#new-account").submit(function(event) {

    var userName = $("input#account-name").val();
    var initialDeposit = parseInt($("input#initial-deposit").val());

    var newAccount = new Account(userName, initialDeposit);

    $(".account-name").text(userName);
    $(".account-balance").text(initialDeposit);

    $("#info").show();
    event.preventDefault();

    $("input#account-name").val("");
    $("input#initial-deposit").val("");

    $("form#deposit-withdraw").submit(function(event) {

      var newDeposit = parseInt($("input#depositAmount").val());
      var newWithdraw = parseInt($("input#withdrawAmount").val());

      if (newDeposit > 0) {
        newBalance = newAccount.deposit(newDeposit);
      } else if (newWithdraw > 0) {
        newBalance = newAccount.withdraw(newWithdraw);
      }

      $(".account-name").text(newAccount.accountName);
      $(".account-balance").text(newBalance);
      event.preventDefault();

      $("input#depositAmount").val("");
      $("input#withdrawAmount").val("");
    });
  });
});
