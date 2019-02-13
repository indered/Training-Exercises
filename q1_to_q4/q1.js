function simpleInterest() {

    var amt = prompt("Enter Amount");
    var interestRate = prompt("Enter interest rate");
    var time = prompt("Enter number of years");
    var simpleInterest = (amt * interestRate * time) / 100;
    alert("Simple Interest is " + simpleInterest);
}