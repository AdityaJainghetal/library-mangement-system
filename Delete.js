async function deleteData(id) {
    let api = `http://localhost:3000/DataSave/${id}`;
    await fetch(api,{
        method:'DELETE',
        header:{
            'Content-Type': 'application/json',
        }
    })
}

async function dataSave()
{
 let Table=` <table width="50%" height="50%" border="1px" bgcolor="white" style="font-size: 30px">
        <tr bgcolor="orange">
          <th>Name</th>
          <th>Edition</th>
          <th>Author</th>
          <th>Branch</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Photo</th>
          <th>Delete</th>
        </tr>
           `

  let api="http://localhost:3000/DataSave";

  let myObj= await fetch(api);
  let myData= await myObj.json();

   myData.map((key)=>{
       Table+=`  <tr>
            <td>${key.Name}</td>
            <td>${key.edition}</td>
            <td>${key.Author}</td>
            <td>${key.Branch}</td>
            <td>${key.Price}</td>
            <td>${key.Quantity}</td>
            <td><img src="${key.Photo}" alt="Book Photo" style="width: 100px; height: auto;"></td>
            <td>
            <a href="#" onclick="deleteData('${key.id}')">
            <img src="del.png" width="30" height="30">
            </a>
            </td>
          </tr> 
            `

   })
 Table+="</table>"
 document.getElementById("demo").innerHTML=Table;

}

dataSave();

// async function deleteData(id) {
//     let api = `http://localhost:3000/Data/${id}`;
//     await fetch(api,{
//         method:'DELETE',
//         header:{
//             'Content-Type': 'application/json',
//         }
//     })
// }