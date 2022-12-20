function logSubmit() {

    event.preventDefault();
    let a = document.getElementById("currentpass").value;
    let b = document.getElementById("newpass").value;
    let c = document.getElementById("confirmpass").value;
 
    
    if (!a,!b,!c) {
      alert("PLEASE FILL ALL FIELDS");
      return false
    } else {
        window.location.href = "index.html"
        return true;    
    }
  }