export function validateForm () {
    const inputs = document.getElementsByTagName("input");
  
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].classList.remove("error-border");
    }
  
    for (let i = 0; i < inputs.length; i++) {
      if ((inputs[i].value).trim() == "") {
        inputs[i].classList.add("error-border");
        return false;
      }
    }
  
    return true;
}