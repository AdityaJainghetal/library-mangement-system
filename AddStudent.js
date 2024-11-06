document.getElementById("saveData").addEventListener("click", addBook);

async function addBook(e) {
    e.preventDefault();

    let username = document.getElementById("username").value;
    let year = document.getElementById("year").value;
    let College = document.getElementById("College").value;
    let CS = document.getElementById("CS").checked ? "CS" : "";
    let IT = document.getElementById("IT").checked ? "IT" : "";
    let EC = document.getElementById("EC").checked ? "EC" : "";
    let other = document.getElementById("other").value;
    
    let fileInput = document.getElementById('fileInput').files[0];

    
    if (username === "" || year === "" || College === "" || (!CS && !IT && !EC && other === "") || !fileInput) {
        alert("All fields are mandatory");
        return;
    }

    let api = "http://localhost:3000/Student";
    let checkApi = "http://localhost:3000/Student";

    
    const existingBooksResponse = await fetch(checkApi);
    const existingBooks = await existingBooksResponse.json();

    
    const bookExists = existingBooks.some(book => book.Name === username && book.year === year && book.College === College);

    if (bookExists) {
        alert("This book already exists in the store.");
        return;
    }

  
    const branch = CS || IT || EC || other;

   
    const response = await fetch(api, {
        method: "POST",
        body: JSON.stringify({
            "Name": username,
            "year": year,
            "College": College,
            "Branch": branch,
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
