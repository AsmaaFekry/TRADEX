var myForm = document.getElementById('myForm');
var username = document.getElementById('username');
var password = document.getElementById('password');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var address = document.getElementById('address');
var Age = document.getElementById('Age');

function checkName(){
    console.log(username.value)
    var name2 = username.value.trim()
    console.log(name2)
    if(name2.length <= 3){
        handleError(username , 'invalid' , "Name must be More Than 3 characters")
    }
    else{
        handleError(username , 'valid')
    }}

function checkPassword(){
    var reg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    passvalid = password.value.trim();
    if(!reg.test(passvalid)) handleError(password ,'invalid' ,  "Invalid data")
    else{
        handleError(password , 'valid')
    }
    console.log(reg.test(passvalid)) }

function checkEmail(){
    var reg = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")
    emailvalid = email.value.trim()
    if(reg.test(emailvalid)) handleError(email , 'valid')
    else handleError(email , 'invalid' ,"please Enter a valid email")}

function checkPhoneNumber() {
      var reg = new RegExp(/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/);
      phonevalid = phone.value.trim()
    if(reg.test(phonevalid)) handleError(phone , 'valid')
    else handleError(phone , 'invalid' ,"Invalid data")}

function checkAge() {
      var reg = new RegExp(/^\S[0-9]{0,3}$/);
      Agevalid = Age.value.trim()
    if(reg.test(Agevalid)) handleError(Age , 'valid')
    else handleError(Age , 'invalid' ,"Invalid data")}

function handleError (input ,  type , message = ''){
    var small = input.nextElementSibling;
    small.textContent = message;
   if (type === 'invalid') {
    input.style.borderColor="red" ;
    small.style.color="red "
   }  
   else if(type === 'valid'){
    input.style.borderColor = "gray";
   }}

myForm.addEventListener('input', function(e){
    console.log(e.target.id);
    switch(e.target.id){
        case 'username':
            checkName()
        break;
        case 'email':
            checkEmail()
        break;
        case 'password':
            checkPassword()
        break;
        case 'phone':
            checkPhoneNumber()
        break;
        case 'Age':
            checkAge()
        break;
    }
})
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }