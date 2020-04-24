// Add your code here
// document.addEventListener("DOMContentLoaded", () => {

function submitData(name, email){
return fetch(`http://localhost:3000/users`, {
    method: "POST",
    headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
    },
    body: JSON.stringify({
        name,
        email
    })
}) 
    .then(function(response){
        return response.json()
        
    }
    )
    .then( function ( object ) {
        document.body.innerHTML = object[ "id" ]
      } )
      .catch( function ( error ) {
        document.body.innerHTML = error.message
      } )

}


// function renderObject(object){
//     const newEl = document.createElement("li")
//     newEl.innerHTML = `${object.id}`
//     console.log(newEl)
//     const findBody = document.querySelector("body")
//     findBody.appendChild(newEl)
// }
// submitData()

// })

