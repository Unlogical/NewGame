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
  if (pass1.value==pass2.value) {
    alert('все в порядке')  
  }
  else {
    alert('пароли не совпадают')  
  }
}
function testAll() {
  document.getElementById("regbutton").onclick = function () {
    validatePassword() 
  }
}

window.onload = function () {
  var form = document.forms["registration"]
  var emailregexp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]*\.[a-z]{2,6}$/ 
  var validateEmail = validateInput(form.email,emailregexp)
  form.email.onkeyup = validateEmail
  testAll()
}    
