fetch ('https://randomuser.me/api')
    .then(function(response) {
        return response.json()
    })
    .then(function(data){
        console.log (data.results[0].name.last)
        console.log (data.results[0].picture.large)
        console.log (data.results[0].phone)
    })
