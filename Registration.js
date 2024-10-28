document.getElementById('signupBtn').addEventListener('click', add);
function add(e){
    e.preventDefault();

let username = document.getElementById('username').value
let email = document.getElementById('email').value;
let password = document.getElementById("password").value;
let confirmPassword = document.getElementById("psw").value;

if(username === "" || email === "" || password ===  "" || confirmPassword === ""){
    alert("All fields are mandatory")
    return;
}
if(password != confirmPassword){
    alert("Password dosent match")
    return;
}

//set data to local storage
localStorage.setItem("username",username)
localStorage.setItem("email",email)
localStorage.setItem("password",password)

//redirect to login
window.location.href = "login.html";

}
