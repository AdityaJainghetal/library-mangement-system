document.getElementById("saveData").addEventListener("click", addBook);

async function addBook(e) {
    e.preventDefault();

    let bookname = document.getElementById("name").value;
    let edition = document.getElementById("edition").value;
    let Author = document.getElementById("Author").value;
    let CS = document.getElementById("CS").checked ? "CS" : "";
    let IT = document.getElementById("IT").checked ? "IT" : "";
    let EC = document.getElementById("EC").checked ? "EC" : "";
    let other = document.getElementById("other").value;
    let Price = document.getElementById("Price").value;
    let Quantity = document.getElementById("Quantity").value;
    let fileInput = document.getElementById('fileInput').files[0];

    
    if (bookname === "" || edition === "" || Author === "" || Price === "" || Quantity === "" || (!CS && !IT && !EC && other === "") || !fileInput) {
        alert("All fields are mandatory");
        return;
    }

    let api = "http://localhost:3000/DataSave";
    let checkApi = "http://localhost:3000/DataSave";

    
    const existingBooksResponse = await fetch(checkApi);
    const existingBooks = await existingBooksResponse.json();

    
    const bookExists = existingBooks.some(book => book.Name === bookname && book.edition === edition && book.Author === Author);

    if (bookExists) {
        alert("This book already exists in the store.");
        return;
    }

  
    const branch = CS || IT || EC || other;

   
    const response = await fetch(api, {
        method: "POST",
        body: JSON.stringify({
            "Name": bookname,
            "edition": edition,
            "Author": Author,
            "Branch": branch,
            "Price": Price,
            "Quantity": Quantity,
            "Photo": fileInput.name
        }),
        headers: {
            "Content-Type": "application/json",
        }
    });

    if (response.ok) {
        alert("Data saved!");
    
    } else {
        alert("There was an issue saving the data.");
    }
}


document.getElementById('uploadBtn').addEventListener('click', function() {
    const fileInput = document.getElementById('fileInput');
    const imagePreview = document.getElementById('imagePreview');

    
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
