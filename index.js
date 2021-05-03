var mongoose = require('mongoose');
var schema = require('./schema');

mongoose.connect('mongodb//localhost:2701/eje05');

//parametros: nombre del modelo, esquema y nombre de la collecion
var Book = mongoose.model ('Book',schema,'books');  

let book = new Book ({
    title:'100 años de soledad',
    author:'Gabriel Garcia Marquez ',
    body: 'Cosa'

});

book.save(function(error){
    if(error){//si entra aqui, es por que ubo un error
    console.log(error);
    process.exit(1);
    }
    console.log('El doc se a creado con Exito');
    process.exit(0);
});