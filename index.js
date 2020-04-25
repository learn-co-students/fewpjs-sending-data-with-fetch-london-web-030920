// Add your code here


function submitData(userName, userEmail){
    let destination = 'http://localhost:3000/users'
    
    let formData = {
        name: userName, 
        email: userEmail
    }
    
    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      };

    return fetch(destination, configObj)
        .then( function ( response ) {
            return response.json()
        } )
        .then( function ( object ) {
            document.body.innerHTML = object[ "id" ]
        } )
        .catch(function(error){
            document.body.innerHTML = error.message
        })
}

