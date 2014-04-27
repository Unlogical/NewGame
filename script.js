function validateInput(input, reg) { 
  return function() {
    var testIt = reg.test(input.value) 
    input.style.borderColor = testIt  ? 'green' : 'red'
    if(!testIt) {return false}
  }
}
function validatePassword() {
  var pass1 = document.forms["registration"].pass
  var pass2 = document.forms["registration"].copypass
  var check = false
  if (pass1==pass2) {
    check=true  
  }
  if (!check) {
    alert('пароли не совпадают')  
  }
  else {
    alert('все в порядке')  
  }
}

window.onload = function () {
  var form = document.forms["registration"]
  var emailregexp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]*\.[a-z]{2,6}$/ 
  var validateEmail = validateInput(form.email,emailregexp)
  form.email.onkeyup = validateEmail
  form.addEventListener("submit",validatePassword,false)
}    
