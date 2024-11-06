async function dataSave()
{
 let Table=`<table width="100%" height="50%" border="1px" bgcolor="white" font-size="30px">
              <tr bgcolor="orange">
                <th> Name </th>
                <th>year</th>
                <th>College</th>
                <th>Branch </th>
                <th>Photo</th>
               </tr> 
           `

  let api="http://localhost:3000/Student";

  let myObj= await fetch(api);
  let myData= await myObj.json();

   myData.map((key)=>{
    Table+=`<tr>
            <td>${key.Name}</td>
            <td>${key.year}</td>
            <td>${key.College}</td>
            <td>${key.Branch}</td>
            <td><img src="${key.Photo}" alt="Book Photo" style="width: 100px; height: auto;"></td>

                `
   })



 Table+="</table>"
 document.getElementById("demo").innerHTML=Table;

}

dataSave();