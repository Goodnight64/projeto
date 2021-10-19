const usuario = require('../models/usuario');
const status = require('http-status');

exports.Insert = (req, res, next) =>{
    const id_usuario = req.body.identy(1,1);
    const nome = req.body.nome;
    const email = req.body.email;
    const dataNascimento = req.body.dataNascimento;
    const sexo = req.body.sexo;
    const altura = req.body.altura;
    const peso = req.body.peso;
    const senha = req.body.senha;

    usuario.create({
        nome: nome,
        email: email,
        dataNascimento: dataNascimento,
        sexo: sexo,
        altura: altura,
        peso: peso,
        senha: senha,

    })
    .then(usuario=>{
        if(usuario){
            res.status(status.OK).send(usuario);
        }else{
            res.status(status.NOT_FOUND).send();
        }
    })
    .catch(error => next(error));
}