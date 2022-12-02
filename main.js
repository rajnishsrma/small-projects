const API_URL = "https://api.github.com/users";

const Table = document.querySelector("table");
const btn = document.querySelector(".del");
const tr = document.querySelector("#trr");

fetch(API_URL)
.then((res)=>{
    res.json().then((data)=>{
        console.log(data);

     
    
      //Table.innerHTML = datas;
     
     let container = ` <tr>
     <th>ID</th>
     <th>Name</th>
     <th>Reposatory</th>
     <th>Remove</th>
    </tr>`;

     for(ids of data){
        container += `

        <tr>
        <th>${ids.id}</th>
        <th>${ids.login}</th>
        <th>${ids.avatar_url}</th>
        <td><button type="delete">Delete</button></td>
    </tr>
   
   `;
  
     }
    //  btn.addEventListener("click", ()=>{
    //     tr.style.backgroundColor = "blue";
    //    });

     Table.innerHTML = container;

    })
}).catch((err)=>{
    return err;
});

