function logSubmit() {

    event.preventDefault();
    let a = document.getElementById("fname").value;
    let b = document.getElementById("lname").value;
    let c = document.getElementById("phone").value;
    let d = document.getElementById("email").value;
    let e = document.getElementById("pass").value;
    let f = document.getElementById("cpass").value;
    
    if (!a,!b,!c,!d,!e,!f) {
      alert("PLEASE FILL ALL FIELDS");
      return false
    } else {
        window.location.href = "index.html"
        return true;    
    }
  }
  