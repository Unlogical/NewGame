function validateInput(input, reg) { 
  return function() {
    var testIt = reg.test(input.value) 
    input.style.backgroundImage = testIt  ? 'url(style/checkmark.png)' : 'url(style/close1.ico)'
    return testIt
  }
}
window.onload = function () {
  var form = document.forms["registration"]
  var emailregexp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]*\.[a-z]{2,6}$/ 
  var loginregexp = /^[a-z0-9_-]{4,16}$/
  var nameregexp = /^.{1,32}$/
  var passregexp = /^.{4,32}$/
  var validateEmail = validateInput(form.email,emailregexp)
  var validateLogin = validateInput(form.login,loginregexp)
  var validateName = validateInput(form.yourname,nameregexp)
  var validatePassword = validateInput(form.pass,passregexp)
  form.email.onkeyup = validateEmail
  form.login.onkeyup = validateLogin
  form.yourname.onkeyup = validateName
  form.pass.onkeyup = validatePassword
  var pass1 = form.pass
  var pass2 = form.copypass 
  var matchPasswords = function () { 
    var testPass = pass1.value ==pass2.value
    pass2.style.backgroundImage = testPass ? 'url(style/checkmark.png)' : 'url(style/close1.ico)'
    return testPass
  }
  form.copypass.onkeyup = matchPasswords
  document.getElementById("regbutton").onclick = function () {
  	 var formValid = validateLogin() && validatePassword() && matchPasswords()
    if (formValid) {
      form.submit()  
      return true  
    }
  return false    
  } 
}   


