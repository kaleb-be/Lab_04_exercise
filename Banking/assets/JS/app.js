let account1 = {
    fName: "",
    lName: "",
    eligibleToWithdraw: false,
    balance: 30000,
    withdrawalAmount: 0,
    withdrawalLimit: (function() {
        if (this.withdrawalAmount > 10000) {
            this.eligibleToWithdraw = false;
        } else { this.eligibleToWithdraw = true; }
    })()
};


let account2 = {
    fName: "Adam",
    lName: "Smith",
    eligibleToWithdraw: false,
    balance: 0,
    withdrawalAmount: 0,
    withdrawalLimit: (function() {
        if (this.withdrawalAmount > 10000) {
            this.eligibleToWithdraw = false;
        } else { this.eligibleToWithdraw = true; }
    })()
};




(function() {
    account1.fName = prompt("Enter your first name: ");
    account1.lName = prompt("Enter your last name: ");
    choice = prompt("What do you wnat to do: \n   1. Check balance\n   2. Deposit\n   3. withdraw\n   4. Transfer");
    if (choice == "1") {
        balance();
    } else if (choice == "2") {
        deposit();
    } else if (choice == "3") {
        withdraw(0);
    } else {
        transfer();
    }
})();


function deposit(amount) {
    amount = prompt("Pleae enter amount to be deposited: ");
    account1.balance += parseFloat(amount);
    balance();
}

function withdraw(amount = 0) {
    if (amount == 0) { amount = prompt("Please enter amount to be withdrawn from account: "); }
    account1.balance -= parseFloat(amount);

    account1.withdrawalAmount += parseFloat(amount);

    balance();
}

function balance() {
    console.log("Your balance is now: " + account1.balance);

}

function transfer(amount) {
    amount = prompt("Please enter amount to transfer to: " + account2.fName + " " + account2.lName);

    if (parseInt(amount) < account1.balance) {
        withdraw(amount);
        account2.balance += parseFloat(amount);
        console.log("You have successfully sent " + account2.fName + " " + account2.lName + " Br. " + amount);

    } else {
        alert("not enough balance in your account!");
    }
}