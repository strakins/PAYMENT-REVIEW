let aTMdetials = document.querySelector('#card_number');
let laspsedate = document.querySelector('#duration_date');
let cardsa = document.querySelector('#protect_cvv');
let message = document.querySelector('#errmeg');
let form =  document.querySelector('#form2');

form.addEventListener('submit', formValidation);


function formValidation(e){
    e.preventDefault();

    if(aTMdetials.value === "" || laspsedate.value === "" || cardsa.value === ""){
        message.style.color = "red";
        message.innerHTML = "Input can not be blank"
    }else{
        message.style.color = "green";
        message.innerHTML = "Form Successfully Submitted"
    }
}






