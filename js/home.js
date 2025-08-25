/**
 * cash in
 */

function getInputFieldValueNumber(id){
    const inputField = document.getElementById(id);
    const inputFieldValue = document.getElementById(id).value;
    const inputFieldValueNumber = parseInt(document.getElementById(id).value)
    return inputFieldValueNumber;
}

function getInputValueOnly(id){
    const inputField = document.getElementById(id);
    const inputFieldValue = document.getElementById(id).value;
    return inputFieldValue;
}


document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault();
    const bankSelect = getInputValueOnly('bank');
    const bankAccountNUmber = getInputValueOnly('account-number');
    const addAmount = getInputFieldValueNumber('add-amount');
    const pinNumber = getInputFieldValueNumber('add-pin');

    const availAbleBalance=parseInt(document.getElementById("available-balance").innerText) ;

     if (bankAccountNUmber.length !== 11 || isNaN(Number(bankAccountNUmber))) {
        alert("Invalid account number. It must be 11 digits.");
        return;
    }

    
    if (isNaN(addAmount) || addAmount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }
    if (isNaN(pinNumber)) {
        alert("Please enter a valid PIN.");
        return;
    }

    const totalNewAvailableBalance= addAmount + availAbleBalance;
    document.getElementById("available-balance").innerText = totalNewAvailableBalance;

    document.getElementById('bank').value= ""
    document.getElementById('account-number').value =""
    document.getElementById('add-amount').value=""
    document.getElementById('add-pin').value =""


})

/**
 * Cash Out 
 */

document.getElementById('cash-out-btn').addEventListener('click', function(event) {
    event.preventDefault();

    const agentNumber = document.getElementById("agent-number").value;
    const withdrawAmount = Number(document.getElementById("cash-out").value);
    const withDrawPin = document.getElementById("cash-out-pin").value;
    const availableBalance = Number(document.getElementById("available-balance").innerText);

    if (agentNumber.length !== 11 || isNaN(Number(agentNumber))) {
        alert("Invalid Agent number. It must be 11 digits.");
        return;
    }

   
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        alert('Please Enter a Valid Amount');
        return;
    }

    if (withDrawPin.length !== 4 || isNaN(Number(withDrawPin))) {
        alert('Please Enter a Valid 4-digit Pin');
        return;
    }

    if (withdrawAmount > availableBalance) {
        alert("Insufficient Balance!");
        return;
    }

   
    const availableBalanceAfterWithdraw = availableBalance - withdrawAmount;
    document.getElementById('available-balance').innerText = availableBalanceAfterWithdraw;

    document.getElementById("agent-number").value = '';
    document.getElementById("cash-out").value ='';
    document.getElementById("cash-out-pin").value ="";

})

/**
 * Add toggling feature for the homepage carts
 */

document.getElementById("add-money-cart").addEventListener('click',function(){
    document.getElementById("cash-out-parent").style.display ='none';
    document.getElementById("add-money-parent").style.display="block";
})

document.getElementById("cash-out-cart").addEventListener('click',function(){
    document.getElementById("cash-out-parent").style.display ='block';
    document.getElementById("add-money-parent").style.display="none";
})

