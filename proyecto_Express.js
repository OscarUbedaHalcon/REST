
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

const PORT = 8888;
var puntA=0;
var puntB=0;
var turno=0;
var entrada=0;
var partida="";
var elecion1="";
var elecion2="";

class Moviments{
    constructor(){
        this.mov=["piedra","papel","tijera"]
    }
    usarPiedra(){
        return this.mov[0];
    }
    usarPapel(){
        return this.mov[1];
    }
    usarTijera(){
        return this.mov[3];
    }
    comprovarRes(mov1,mov2){
        if(mov1==="piedra" && mov2==="tijera"){
            return 1;
        }
        if(mov1==="papel" && mov2==="piedra"){
            return 1;
        }
        if(mov1==="tijera" && mov2==="papel"){
            return 1;
        }
        if(mov1==="piedra" && mov2==="papel"){
            return 2;
        }
        if(mov1==="papel" && mov2==="tijera"){
            return 2;
        }
        if(mov1==="tijera" && mov2==="piedra"){
            return 2;
        }else{
            return 0;
        }
    }
}

const usuaris = [
    { id: 1, nom: "Jugador1", password: "1234" },
    { id: 2, nom: "Jugador2", password: "5678" }
];



app.post('/iniciarJoc',(req,res)=>{
    if(entrada===0){
        partida= req.params.codiPartida;
        entrada=entrada+1;
        res.status(200).send("Partida creada");
    }else{
        res.status(400).send("Error, partida ya creada");
    }
});

app.get('/consultarEstatPartida',(req,res)=>{
    if(req.params.codiPartida!=partida){
        res.status(400).send("Partida no existente");
    }else{
        var puntuacio={puntuacioJugador1: puntA,puntuacioJugador2: puntB};
        res.send(puntuacio);
    }
});

app.put('/moureJugador',(req,res)=>{
    var moviment1= new Moviments();
    var moviment2= new Moviments();
    var estat;
    if(req.params.codiPartida==partida){
        if(req.params.jugador=="Jugador1"){
            if(req.params.tipusMoviment==="piedra"){
                elecion1=moviment1.usarPiedra();
            }
            if(req.params.tipusMoviment=="papel"){
                elecion1=moviment1.usarPapel();
            }
            if(req.params.tipusMoviment=="tijera"){
                elecion1=moviment1.usarTijera();
            }else{
                res.status(400).send("Movimiento desconocido");
            }
            turno+=1;
        }
        if(req.params.jugador=="Jugador2"){
            if(req.params.tipusMoviment=="piedra"){
                elecion2=moviment2.usarPiedra();
            }
            if(req.params.tipusMoviment=="papel"){
                elecion2=moviment2.usarPapel();
            }
            if(req.params.tipusMoviment=="tijera"){
                elecion2=moviment2.usarTijera();
            }else{
                res.status(400).send("Movimiento desconocido");
            }
            turno+=1;
        }
            estat=0;
            while(!estat){
                if(turno===2){
                    if(moviment1.comprovarRes(elecion1,elecion2)===1){
                        puntA+=1;
                        res.send("Ha ganado Jugador1 "+elecion1+" "+elecion2);
                        estat=1;
                        break;
                    }
                    if(moviment1.comprovarRes(elecion1,elecion2)===2){
                        puntB+=1;
                        res.send("Ha ganado Jugador2 "+elecion1+" "+elecion2);
                        estat=1;
                        break;

                    }else{
                        res.send("Empate "+elecion1+" "+elecion2);
                        estat=1;
                        break;
                    }
                }                
            }
        turno=0;
        res.send("Moviment fet");
    }else{
        res.send("Partida Erronea");
    }
});

app.delete('/acabarJoc',(res,req)=>{
    if(req.params.codiPartida==partida){
        partida="";
        puntA=0;
        puntB=0;
        entrada=0;
        elecion1="";
        elecion2="";
        res.status(200).send("Partida acabada");
    }else{
        res.status(400).send("Partida desconeguda");
    }
});

app.listen(PORT, () => {
    console.log(`Servidor execuntant-se en el port ${PORT}.`);
});