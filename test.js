var g1 = Math.floor(Math.random() * 101);
var g2 = Math.floor(Math.random() * 101);
var numeroEstratto = Math.floor(Math.random() * 101);
console.log("Il numero scelto da G1 è", g1);
console.log("Il numero scelto da G2 è", g2);
console.log("Il numero estratto è", numeroEstratto);
if (numeroEstratto === g1) {
    console.log("G1 ha vinto");
}
else if (numeroEstratto === g2) {
    console.log("G2 ha vinto");
}
else if (Math.abs((g1 - numeroEstratto)) < Math.abs((g2 - numeroEstratto))) {
    console.log("Nessuno ha vinto, ma G1 si è avvicinato di più");
}
else {
    console.log("Nessuno ha vinto, ma G2 si è avvicinato di più");
}
// let a:number = 5
// let b:number = 1
// let c:number = 7
// if(Math.abs((a-c))<Math.abs((b-c))){
//     console.log("a si è avvicinato di più")
// }else{
//     console.log("b si è avvicinato di più")
// }
