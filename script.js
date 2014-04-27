function validateInput(input, reg) { 
  return function() {
    var testIt = reg.test(input.value) 
    input.style.borderColor = testIt  ? 'green' : 'red'
    if(!testIt) {return false}
  }
}
function validatePassword() {
  var pass1 = document.forms["registration"].pass.value
  var pass2 = document.forms["registration"].copypass.value  
  if (!pass1 || pass1!=pass2) {
  	 alert('you shall not pass!')
    return false
  }
  alert('все в порядке') 
  return true 
}

window.onload = function () {
  var form = document.forms["registration"]
  var emailregexp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]*\.[a-z]{2,6}$/ 
  var validateEmail = validateInput(form.email,emailregexp)
  form.email.onkeyup = validateEmail
  document.getElementById("regbutton").onclick = function () {
    validatePassword() 
  }
}    
