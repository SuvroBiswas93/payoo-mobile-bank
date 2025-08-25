document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault();
    const bankSelect = document.getElementById('bank').value;
    const bankAccountNUmber=document.getElementById('account-number').value;
    const addAmount =parseInt(document.getElementById('add-amount').value) ;
    const pinNumber =parseInt(document.getElementById('add-pin').value);

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

})