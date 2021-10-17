let cardNumber = document.querySelector('#cardNumber');
let expiryDate = document.querySelector('#dueDate');
let secretNumber = document.querySelector('#customerCvv');
let message = document.querySelector('#errmesg');
let form =  document.querySelector('#cardentry_detials');

form.addEventListener('submit', formValidation);


function formValidation(e){
    e.preventDefault();

    if(cardNumber.value === "" || expiryDate.value === "" || secretNumber.value === ""){
        message.style.color = "red";
        message.innerHTML = "Input can not be blank, Please update  your card details"
    }else{
        
        message.innerHTML = "Detials Successfully Added"
    }
}

