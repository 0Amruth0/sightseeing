
function signup() {
  document.getElementById("signup").style.display = "block";
  document.getElementById("login").style.display = "none";
}

function closesignup() {
  document.getElementById("signup").style.display = "none";
  window.location.replace("index.html");
}
function login(){
  document.getElementById("login").style.display = "block";
  document.getElementById("signup").style.display = "none";
}
function closelogin(){
  document.getElementById("login").style.display = "none";
  window.location.replace("index.html");
}
function resetbutton(){
  document.getElementById("resettext").style.display = "block";
}