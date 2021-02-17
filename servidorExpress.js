const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const rp = require('request-promise');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('ok');
});

app.post('/usuario', function (req, res) {
    let status;
    let error = null;

    if(typeof req.body.dni === 'string' && req.body.dni.match(/^[0-9]+$/))
    {
        req.body.dni = parseInt(req.body.dni);
    }

    ///VALIDACIONES
    if(!req.body.apellido || !req.body.dni)
    {
        status = 400;
        error = "El apellido y el dni son obligatorios";
    }
    else if(typeof req.body.nombre !== 'string' || typeof req.body.apellido !== 'string' )
    {   
        status = 400;
        error = 'El nombre o el apellido no es una cadena de texto';
    }

    else if(typeof req.body.dni !== 'number' || req.body.dni.toString().length > 10 )
    {   
        status = 400;
        error = 'El dni no es un numero o tiene mas de 10 caracteres';
    }

    else if(Object.keys(req.body).length > 3)
    {   
        status = 400;
        error = 'El objeto tiene mas atributos';
    }

    ///EVALUO ERROR O ENVÍO A BD

    if(error != null){
        res.status(status);
        res.send(error);
    }

    else{
        let options = {
        method: "POST",
        uri: 'https://reclutamiento-14cf7.firebaseio.com/personas.json',
        body: req.body,
        json: true
        };

        rp(options)
        .then( response => {
            res.status(201);
            res.send(response);
        })
        .catch(err => {
            res.status(500);
            res.send(err);
        })

    }

    
});



app.listen(3000,()=>{
    console.log('Estoy escuchando el puerto 3000');
})
