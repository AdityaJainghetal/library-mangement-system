document.getElementById("signin").addEventListener("click",display);

function display(e){
    e.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById("password").value

    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");

    if(username === storedUsername && password === storedPassword){
        alert(`Login Successful , welcome ${storedUsername}`);
        window.location.href = "index.html"
    }
    else{
        alert("Incorrect details");
        // window.location.href = "dashboard.html"
    }
}