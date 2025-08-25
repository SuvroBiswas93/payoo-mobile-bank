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

function getInnerText(id){
    const element = document.getElementById(id);
    const elementValue = element.innerText;
    const elementValueNumberConversion = parseInt(elementValue)
    return elementValueNumberConversion;
}


function setInnertext(value){
    const availablebalanceElement = document.getElementById('available-balance')
    availablebalanceElement.innerText = value;
    
}

function handleToggle(id){
     const forms = document.getElementsByClassName('form')
    for (const form of forms) {
        form.style.display = 'none'
    }
    document.getElementById(id).style.display = 'block'
}

document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault();
    const bankSelect = getInputValueOnly('bank');
    const bankAccountNUmber = getInputValueOnly('account-number');
    const addAmount = getInputFieldValueNumber('add-amount');
    const pinNumber = getInputFieldValueNumber('add-pin');

    const availAbleBalance= getInnerText('available-balance');

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
    // document.getElementById("available-balance").innerText = totalNewAvailableBalance;
    setInnertext(totalNewAvailableBalance);
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

    const agentNumber = getInputValueOnly('agent-number');
    const withdrawAmount = getInputFieldValueNumber("cash-out");
    const withDrawPin = getInputValueOnly('cash-out-pin');
    const availableBalance = getInnerText('available-balance');

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
    // document.getElementById('available-balance').innerText = availableBalanceAfterWithdraw;
    setInnertext(availableBalanceAfterWithdraw);
    document.getElementById("agent-number").value = '';
    document.getElementById("cash-out").value ='';
    document.getElementById("cash-out-pin").value ="";

})

/**
 * Transfer Money
 */


document.getElementById("send-btn").addEventListener("click",function(event){
    event.preventDefault();
    const userAccountNumber =  getInputValueOnly("user-account-number");
    const transferBalanceAmount = getInputFieldValueNumber("transfer-balance");
    const transferPinNumber = getInputValueOnly('transfer-pin')
    const availableBalance = getInnerText('available-balance');

    if (userAccountNumber.length !== 11 || isNaN(Number(userAccountNumber))) {
        alert("Invalid Account number. It must be 11 digits.");
        return;
    }

    if (isNaN(transferBalanceAmount) || transferBalanceAmount <= 0) {
        alert('Please Enter a Valid Amount');
        return;
    }

    if (transferPinNumber.length !== 4 || isNaN(Number(transferPinNumber))) {
        alert('Please Enter a Valid 4-digit Pin');
        return;
    }

    if (transferBalanceAmount > availableBalance) {
        alert("Insufficient Balance!");
        return;
    }

    const availalableBalanceAfterTransfer = availableBalance - transferBalanceAmount
    setInnertext(availalableBalanceAfterTransfer);
    console.log(transferBalanceAmount,transferPinNumber)

    document.getElementById("user-account-number").value = '';
    document.getElementById("transfer-balance").value ='';
    document.getElementById("transfer-pin").value ="";

})

/**
 * Add toggling feature for the homepage carts
 */

document.getElementById("add-money-cart").addEventListener('click',function(){
    handleToggle('add-money-parent');
})

document.getElementById("cash-out-cart").addEventListener('click',function(){
 
    handleToggle('cash-out-parent');
})


document.getElementById("transfer-money-cart").addEventListener('click',function(){

    handleToggle('transfer-money-parent');
})
