document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();
    const mobileNumber = 12345678910;
    const pinNumber = 1234;
    
    const mobileNumberValue = parseInt(document.getElementById('mobile-number').value);
    const PinNumberValue = parseInt(document.getElementById('pin-number').value);

    if(mobileNumber === mobileNumberValue && pinNumber === PinNumberValue){
        window.location.href = "./home.html"
    }
    else{
        alert('Invalid Credentials');
    }
    
})