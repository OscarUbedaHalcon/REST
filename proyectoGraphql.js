const restify = require('restify');
const { graphqlHTTP } = require('express-graphql');

const app = restify.createServer();
var puntA=0;
var puntB=0;
var turno=0;
var entrada=0;
var partida="";
var elecion1="";
var elecion2="";
var res="";

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
const typeDefinitionIn = `
type Query  {
   codiPartida: int
}`
const  resolverObjectIn = {
   Query : {
      codiPartida: () => 'Partida creada'
   }
}
const schema = makeExecutableSchema({typeDefs:typeDefinitionIn, resolvers:resolverObjectIn})
app.post(
  '/iniciarJoc',
  graphqlHTTP({
    schema: schema,
    graphiql: false,
  }),
);
const typeDefinitionCon = `
type Query  {
   codiPartida: int
}`
const  resolverObjectCon = {
   Query : {
      codiPartida: () => 'Puntuacio'+puntA+" - "+puntB
   }
}
const schema2 = makeExecutableSchema({typeDefs:typeDefinitionCon, resolvers:resolverObjectCon})
app.get(
  '/consultaEstatPartida',
  graphqlHTTP({
    schema: schema2,
    graphiql: true,
  }),
);
const typeDefinitionMov = `
type Query  {
   codiPartida: int
   jugador: String
   tipusMoviment: String
}`

const  resolverObjectMov = {
   Query : {
      codiPartida: () => 'Puntuacio'+puntA+" - "+puntB
   }
}

const schema3 = makeExecutableSchema({typeDefs:typeDefinitionMov, resolvers:resolverObjectMov})
var moviment1= new Moviments();
    var moviment2= new Moviments();
    var estat;
    if(schema3.jugador==="Jugador1"){
        if(schema3.tipusMoviment==="piedra"){
            elecion1=moviment1.usarPiedra();
        }
        if(schema3.tipusMoviment==="papel"){
            elecion1=moviment1.usarPapel();
        }
        if(schema3.tipusMoviment==="tijera"){
            elecion1=moviment1.usarTijera();
        }else{
            
        }
        turno+=1;
    }
    if(schema3.jugador==="Jugador2"){
        if(schema3.tipusMoviment==="piedra"){
            elecion2=moviment2.usarPiedra();
        }
        if(schema3.tipusMoviment==="papel"){
            elecion2=moviment2.usarPapel();
        }
        if(schema3.tipusMoviment==="tijera"){
            elecion2=moviment2.usarTijera();
        }else{
           
        }
        turno+=1;
    }
    if(turno===2) {
        estat=0;
        while(!estat){
            if(moviment1.comprovarRes(elecion1,elecion2)===1){
                puntA+=1;
               res="Ha ganado Jugador1 "+elecion1+" "+elecion2;
                estat=1;
            }
            if(moviment1.comprovarRes(elecion1,elecion2)===2){
                puntB+=1;
                res="Ha ganado Jugador2 "+elecion1+" "+elecion2;
                estat=1;
            }else{
                res="Empate "+elecion1+" "+elecion2;
                estat=1;
            }
            
        }
    }
    turno=0;
app.put(
  '/moureJugador',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  }),
);
const typeDefinitionAc = `
type Query  {
   codiPartida: int
}`

const  resolverObjectAc = {
   Query : {
      codiPartida: () => 'El joc esta tancat'
   }
}
puntA=0;
puntB=0;
turno=0;
entrada=0;
partida="";
elecion1="";
elecion2="";
res="";

schema = makeExecutableSchema({typeDefs:typeDefinitionAc, resolvers:resolverObjectAc})
app.delete(
    '/acabarJoc',
    graphqlHTTP({
      schema: schema,
      graphiql: true,
    }),
  );

app.listen(4000);