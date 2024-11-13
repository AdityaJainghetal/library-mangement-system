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
                <th>Issue Book</th>
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
            <td><button  onclick="addBooks('${key.id}')">Issue Book</button></td>

                `
   })



 Table+="</table>"
 document.getElementById("demo").innerHTML=Table;

}



async function addBooks(data){

    

    let api1 = `http://localhost:3000/DataSave/${data}`;
    const new2 = await fetch(api1)
    const newdata2 = await new2.json() ;
    

   

    console.log(newdata2)

    let api = "http://localhost:3000/Student/53be";
    const new1 = await fetch(api)
    let newdata = await new1.json() ;

    var array = newdata.issuedBooks;
    // new array =await ;

    newdata.issuedBooks.push(newdata2)

    console.log(newdata)

    const response = await fetch(api, {
        method: "PUT",
        body: JSON.stringify(newdata),
        // headers: {
        //     "Content-Type": "application/json",
        // },        
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newdata)

    });


     
}

dataSave();
