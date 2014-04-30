function reglinkOnclick() {
  var formStyle = document.getElementById("enterForm").style  
  formStyle.visibility = "visible" 
  formStyle.trancition = "1s 0s"
  formStyle.opacity = "1"
  return false
}  
function hideOnclick() {
  var formStyle = document.getElementById("enterForm").style  
  formStyle.visibility = "hidden" 
  formStyle.trancition = "1s 0s"
  formStyle.opacity = "0"
  return false
}                                            
function init() {
  document.getElementById("enter").onclick = reglinkOnclick
  document.getElementById("hide").onclick = hideOnclick
}
window.onload = init