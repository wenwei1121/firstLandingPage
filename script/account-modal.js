// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("account");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// login & register modal slide effect
var signin = document.getElementById("login")
var signup = document.getElementById("register")
var switch_btn = document.getElementById("switch-btn")
var toggle_login_btn = document.getElementById("toggle-login-btn")
var toggle_register_btn = document.getElementById("toggle-register-btn")

toggle_login_btn.style.color= "#79A1C0";

function login(){
  if ( window.matchMedia("(min-width: 992px)").matches) {
    signin.style.left = "110px";
    signup.style.left = "1100px";
    switch_btn.style.left = "0";
    toggle_login_btn.style.color= "#79A1C0";
    toggle_register_btn.style.color= "seashell";
  }
  else if ( window.matchMedia("(min-width: 768px)").matches) {
    signin.style.left = "35px";
    signup.style.left = "800px";
    switch_btn.style.left = "0";
    toggle_login_btn.style.color= "#79A1C0";
    toggle_register_btn.style.color= "seashell";
  }  
  else if ( window.matchMedia("(max-width: 767px)").matches) {
    signin.style.left = "25px";
    signup.style.left = "500px";
    switch_btn.style.left = "0";
    toggle_login_btn.style.color= "#79A1C0";
    toggle_register_btn.style.color= "seashell";
  } 
  else{

  }
}

function register(){
  if ( window.matchMedia("(min-width: 992px)").matches) {
    signin.style.left = "-1100px";
    signup.style.left = "110px";
    switch_btn.style.left = "225px";
    toggle_register_btn.style.color= "#79A1C0";
    toggle_login_btn.style.color= "seashell";
  }
  else if ( window.matchMedia("(min-width: 768px)").matches) {
    signin.style.left = "-800px";
    signup.style.left = "35px";
    switch_btn.style.left = "210px";
    toggle_register_btn.style.color= "#79A1C0";
    toggle_login_btn.style.color= "seashell";
  }  
  else if ( window.matchMedia("(max-width: 767px)").matches) {
    signin.style.left = "-500px";
    signup.style.left = "25px";
    switch_btn.style.left = "145px";
    toggle_register_btn.style.color= "#79A1C0";
    toggle_login_btn.style.color= "seashell";
  } 
  else{

  }
}

function openmodal(){
  modal.style.display = "block";
}