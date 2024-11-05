async function dataSave()
{
 let Table=`<table width="100%" height="100%" border="1px" bgcolor="white" font-size="30px">
              <tr bgcolor="orange">
                <th> Name </th>
                <th>edition</th>
                <th> Author </th>
                <th>Branch </th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Photo</th>
               </tr> 
           `

  let api="http://localhost:3000/DataSave";

  let myObj= await fetch(api);
  let myData= await myObj.json();

   myData.map((key)=>{
    Table+=`<tr>
            <td>${key.Name}</td>
            <td>${key.edition}</td>
            <td>${key.Author}</td>
            <td>${key.Branch}</td>
            <td>${key.Price}</td>
            <td>${key.Quantity}</td>
            <td><img src="${key.Photo}" alt="Book Photo" style="width: 100px; height: auto;"></td>

                `
   })



 Table+="</table>"
 document.getElementById("demo").innerHTML=Table;

}

dataSave();