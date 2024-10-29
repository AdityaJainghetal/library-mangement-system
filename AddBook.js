document.getElementById("saveData").addEventListener("click", addBook);


async function addBook(e){
    e.preventDefault();

    let bookname = document.getElementById("name").value;
    let edition = document.getElementById("Edition").value;
    let Author = document.getElementById("Author").value;
    let CS = document.getElementById("CS").value;
    let IT = document.getElementById("IT").value;
    let EC = document.getElementById("EC").value;
    let other = document.getElementById("other").value;
    let Price = document.getElementById("Price").value;
    let Quantity = document.getElementById("Quantity").value;
    let fileInput = document.getElementById('fileInput').files[0];


    if(bookname === "" || edition === "" || Author ===  "" || Price === "" || Quantity === "" || CS === "" || IT === "" || EC === "" || !fileInput || other === ""){
        alert("All fields are mandatory")
        return;
    }

    let api= "http://localhost:3000/DataSave";

const response= await fetch(api, {
    method: "POST",
    body: JSON.stringify({ 
      "Name":bookname,
      "edition": edition,
      "Author": Author,
      "Branch": CS || IT || EC || other,
      "Price":Price,
      "Quantity": Quantity,
      "Photo": fileInput.name
     }),
     headers: {
        "Content-Type": "application/json",
      }
     
});
// if(genderMale || genderFemale || gender){
//         document.write()
// }

console.log(response);
response =  window.location.href="index.html";
alert("data save!!!");

}



document.getElementById('uploadBtn').addEventListener('click', function() {
    const fileInput = document.getElementById('fileInput');
    const imagePreview = document.getElementById('imagePreview');

    // Clear previous previews
    imagePreview.innerHTML = '';

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            imagePreview.appendChild(img);
        };

        reader.readAsDataURL(fileInput.files[0]);
       
    } else {
        alert('Please select an image file.');
    }
});
