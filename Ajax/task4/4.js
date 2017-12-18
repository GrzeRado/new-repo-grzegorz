fetch ('https://randomuser.me/api')
    .then(function(response) {
        return response.json()
    })
    .then(function(data){
        console.log (data.results[0].name.last)
        console.log (data.results[0].picture.large)
        console.log (data.results[0].phone)

        var a = data.results[0].name.last
        var b = data.results[0].picture.large
        var c = data.results[0].phone

        var block = document.createElement('div')
        document.body.appendChild(block)

        block.innerHTML = '<p>' + a + '</p><p><img src ="' + b + '"></p><p>' + c + '</p>'

    })
    // koniec
