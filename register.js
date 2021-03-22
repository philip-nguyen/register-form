// dererred script
var strength = {
  0: "Weakest",
  1: "Weak",
  2: "OK",
  3: "Good",
  4: "Strong"
}
console.log("penis"); 

var password = document.getElementById('password');
var meter = document.getElementById('password-strength');
var text = document.getElementById('password-strength-text');

password.addEventListener('input', function() {
    var val = password.value;
    var result = zxcvbn(val);

    // This updates the password strength meter
    meter.value = result.score;

    // This updates the password meter text
    if (val !== "") {
        text.innerHTML = "Password Strength: " + strength[result.score]; 
    } else {
        text.innerHTML = "";
    }
});

function saveForm() {
  // get all elements by ID
  var userId = document.getElementById('userId').value;
  var password = document.getElementById('password').value;
  var password2 = document.getElementById('pass-retype').value;
  var email = document.getElementById('email').value;
  var email2 = document.getElementById('email-retype').value;
  var security1 = document.getElementById('security1').value;
  var security1Ans = document.getElementById('security1-ans').value;
  var security2 = document.getElementById('security2').value;
  var security2Ans = document.getElementById('security2-ans').value;

  if(password !== password2) {
    alert("Password does not match");
  }
  if(email !== email2) {
    alert("Email does not match");
  }
  // sessionStorage.setItem for all fields
  sessionStorage.setItem('user', userId);
  sessionStorage.setItem('pass', password);
  sessionStorage.setItem('email', email);
  sessionStorage.setItem('secQ1', security1);
  sessionStorage.setItem('secA1', security1Ans);
  sessionStorage.setItem('secQ2', security2);
  sessionStorage.setItem('secA2', security2Ans);

}