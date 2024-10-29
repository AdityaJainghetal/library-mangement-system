async function dataSave() {
    let Table = `
      <table width="100%" height="100%" border="1px" bgcolor="white" style="font-size: 30px;">
        <tr bgcolor="orange">
          <th>Name</th>
          <th>Edition</th>
          <th>Author</th>
          <th>Branch</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Photo</th>
        </tr>
    `;
  
    const api = `http://localhost:3000/DataSave/${myid}`;
  
    try {
      const response = await fetch(api);
      if (!response.ok) throw new Error("Network response was not ok");
  
      const myData = await response.json();
      
      myData.forEach((key) => {
        Table += `
          <tr>
            <td>${key.Name}</td>
            <td>${key.edition}</td>
            <td>${key.Author}</td>
            <td>${key.Branch}</td>
            <td>${key.Price}</td>
            <td>${key.Quantity}</td>
            <td><img src="${key.Photo}" alt="Book Photo" style="width: 100px; height: auto;"></td>
          </tr>
        `;
      });
  
      Table += "</table>";
      document.getElementById("demo").innerHTML = Table;
  
    } catch (error) {
      console.error("Error fetching data:", error);
      document.getElementById("demo").innerHTML = "Error loading data.";
    }
  }
  
  async function editDisplay(myid) {
    const api = `http://localhost:3000/DataSave/${myid}`;
  
    try {
      const response = await fetch(api);
      if (!response.ok) throw new Error("Network response was not ok");
  
      const Data = await response.json();
      const myForm = `
        Edit Name: <input type="text" id="name" value="${Data.Name}">
        <br>
        Edit Branch:
        <input type="radio" name="Branch" value="CS" ${Data.Branch === "CS" ? "checked" : ""}> CS
        <input type="radio" name="Branch" value="EC" ${Data.Branch === "EC" ? "checked" : ""}> EC
        <input type="radio" name="Branch" value="IT" ${Data.Branch === "IT" ? "checked" : ""}> IT
        <input type="radio" name="Branch" value="Other" ${Data.Branch === "Other" ? "checked" : ""}> Other
        <br>
        Edit Edition: <input type="text" id="edition" value="${Data.edition}">
        <br>
        Edit Author: <input type="text" id="Author" value="${Data.Author}">
        <br>
        Edit Price: <input type="text" id="Price" value="${Data.Price}">
        <br>
        Edit Quantity: <input type="text" id="Quantity" value="${Data.Quantity}">
        <br>
        Edit Photo: <input type="upload" id="fileInput" value="${Data.fileInput.name}">
        <br>
        <button onclick="EditSave('${Data.id}')">Save</button>
      `;
  
      document.getElementById("demo1").innerHTML = myForm;
  
    } catch (error) {
      console.error("Error fetching data:", error);
      document.getElementById("demo1").innerHTML = "Error loading edit form.";
    }
  }
  
  async function editData() {
    let Table = `
      <table width="100%" border="1" bgcolor="yellow">
        <tr bgcolor="orange">
          <th>Name</th>
          <th>Branch</th>
          <th>Edition</th>
          <th>Author</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Photo</th>
          <th>Edit Data</th>
        </tr>
    `;
  
    const api = "http://localhost:3000/DataSave";
  
    try {
      const response = await fetch(api);
      if (!response.ok) throw new Error("Network response was not ok");
  
      const myData = await response.json();
  
      myData.forEach(key => {
        Table += `
          <tr>
            <td>${key.Name}</td>
            <td>${key.Branch}</td>
            <td>${key.edition}</td>
            <td>${key.Author}</td>
            <td>${key.Price}</td>
            <td>${key.Quantity}</td>
            <td>${key.Photo}</td>
            <td>
              <a href="#" onclick="editDisplay('${key.id}')">
                <img src="edit.png" width="30" height="30">
              </a>
            </td>
          </tr>
        `;
      });
  
      Table += "</table>";
      document.getElementById("demo").innerHTML = Table;
  
    } catch (error) {
      console.error("Error fetching data:", error);
      document.getElementById("demo").innerHTML = "Error loading data.";
    }
  }
  
  // Initialize the data display
  editData();
  