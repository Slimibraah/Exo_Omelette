import {maison,epicerie,slimi,oeuf,huile,poivre,lait,chaktar,bol,couteau,poele,nullePart} from './instance.js'

nullePart.personne.push(slimi);
slimi.lieu = nullePart
slimi.seDeplacer (nullePart, maison)
slimi.seDeplacer(maison, epicerie)
slimi.prendrePanier(epicerie)
slimi.acheter(epicerie)
slimi.seDeplacer(epicerie, maison)
slimi.vider()

console.log(bol)

slimi.seDeplacer(maison,epicerie)
slimi.remettrePanier(epicerie)
slimi.seDeplacer(epicerie, maison)
slimi.couper();

console.log(slimi);

console.log(bol);

slimi.melanger('omelette');

console.log(bol);

slimi.viderBol();

console.log(bol);
console.log(poele);
setTimeout(() => {
    console.log("Sa chauffe");
}, 3000);
poele.cuir();


console.log(poele.contenu[0]);

setTimeout(()=> {
    console.log(poele.contenu[0]);
}, 4000); 