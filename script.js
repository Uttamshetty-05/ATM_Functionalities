let balance = 10000;

function clearInput() {
    document.getElementById("amount").value = "";
}

function deposit() {
    let amt = Number(document.getElementById("amount").value);

    if (amt > 0) {
        balance += amt;
        document.getElementById("balance").innerText = balance;
        document.getElementById("message").innerText = "₹" + amt + " deposited successfully.";
        clearInput();   
    } else {
        document.getElementById("message").innerText = "Enter a valid deposit amount.";
    }
}

function withdraw() {
    let amt = Number(document.getElementById("amount").value);

    if (amt > 0 && amt <= balance) {
        balance -= amt;
        document.getElementById("balance").innerText = balance;
        document.getElementById("message").innerText = "₹" + amt + " withdrawn successfully.";
        clearInput();  
    } else {
        document.getElementById("message").innerText = "Insufficient balance or invalid amount.";
    }
}

function checkBalance() {
    document.getElementById("message").innerText = "Your current balance is ₹" + balance;
}
