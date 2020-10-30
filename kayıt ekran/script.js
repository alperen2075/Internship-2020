const form= document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const phone=document.getElementById("phone");
const password=document.getElementById("password");
const repassword=document.getElementById("repassword");

form.addEventListener("submit", function(e){
    e.preventDefault();
    //console.log(username.value);
    //if(username.value==='') {username.className="form-control is-invalid"};
    checkrequired([username,email,password,phone,repassword]);
    if(email.value!="")
    validateEmail(email);

    if(phone.value!="")
    phoneValidation(phone);

    if(username.value!=""){
        if(username.value.length<7) error(username,"Kullanıcı Adı 6 karakterden fazla olmalıdır!");
    }
    
    if(password.value!=""||repassword.value!=""){
        if(password.value.length<8) error(password,"Kullanıcı Adı 7 karakterden fazla olmalıdır!");
        else {
            if(password.value!=repassword.value){
                error(password,"Şifreler eşleşmiyor!");
                error(repassword,"Şifreler eşleşmiyor!");
        }
        }
    }
}
    
);


function error(input,message){
    input.className="form-control is-invalid ";
    const div=input.nextElementSibling;
    div.innerText=message;    
    div.className="invalid-feedback";
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email.value)) isValid(email);
    else error(email,"Mail adresi hatalı");
}

function phoneValidation(index) {
    var p=String(index.value);
    var phoneRe = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
    if(p.length != 10) error(index,"Telefon Numarası 10 Haneli Olmalı!");
    else if(!phoneRe.test(index.value)) error(index, "Numara yanlış formatta girilmiş!");
    else isValid(index);
    
}

function isValid(input){
    input.className="form-control is-valid";
}

function checkrequired(inputs){
    inputs.forEach(function(input){
        if(input.value==="")
        error(input,input.id+' gerekli !');
    else isValid(input);
        
    });
}