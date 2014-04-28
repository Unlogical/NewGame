function validateInput(input, reg) { 
  return function() {
    var testIt = reg.test(input.value) 
    input.style.backgroundImage = testIt  ? 'url(style/checkmark.png)' : 'url(style/close1.ico)'
  }
}
function validatePasswords() {
  var pass1 = document.forms["registration"].pass
  var pass2 = document.forms["registration"].copypass 
  if (!pass1.value  || pass1.value !=pass2.value ) {
  	 pass1.style.borderColor = 'red'
  	 pass2.style.backgroundImage = 'red'
    return false
  } 
  return true 
}

window.onload = function () {
  var form = document.forms["registration"]
  var emailregexp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]*\.[a-z]{2,6}$/ 
  var loginregexp = /^[a-z0-9_-]{4,16}$/
  var validateEmail = validateInput(form.email,emailregexp)
  var validateLogin = validateInput(form.login,loginregexp)
  form.email.onkeyup = validateEmail
  form.login.onkeyup = validateLogin
  document.getElementById("regbutton").onclick = function () {
    if (validatePasswords()) {
      form.submit()    
    }
    return false    
  }
}    
