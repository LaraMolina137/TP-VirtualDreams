const rp = require('request-promise');

function get() {
    var options = {
        url:'https://reclutamiento-14cf7.firebaseio.com/personas.json',
        json:true
    };
    

    rp(options)
    .then((response)=> console.log(response))
    .catch((err)=>console.log(err))
}

get();