 function validateInput(input, reg) { 
        return function() {
          var testIt = reg.test(input.value) 
          input.style.borderColor = testIt  ? 'green' : 'red'
          if(!testIt) {return false}
        }
      }

      window.onload = function () {
        var form = document.forms["registration"]
        var emailregexp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]*\.[a-z]{2,6}$/ 
        var validateEmail = validateInput(form.email,emailregexp)
        form.email.onkeyup = validateEmail
      }    
