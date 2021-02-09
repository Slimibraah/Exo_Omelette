import {Personne,Lieu,Ingredients} from './class.js'

let maison = new Lieu('Maison',[])
let epicerie = new Lieu('Epicerie',[])
epicerie.bacPaniers = [
    {nom:'panier 1', contenu : []},
    {nom:'panier 2', contenu : []},
    {nom:'panier 3', contenu : []}
]
let nullePart = new Lieu ('nullePart', [])

let slimi = new Personne('Slimi',nullePart,200,[],[])

let oeuf = new Ingredients('Oeuf','entier',2)
let huile = new Ingredients('huile','liquide',2)
let poivre = new Ingredients('poivre','moulu',2)
let lait = new Ingredients('lait','liquide',2)
let chaktar = new Ingredients('Chaktar','entier',3,50)

epicerie.ingredients = [oeuf,huile,poivre,lait,chaktar]

let bol = {
    nom : 'bol',
    contenu : [],
    melanger(nomMelange){
        let newMelange = {
            nom : nomMelange,
            etat : 'pas cuit'
        }
        while(this.contenu.length > 0){
            this.contenu.shift()
        }
        this.contenu.push(newMelange)
    }
}

let couteau = {
    nom : 'Couteau',
    couper (ingredients){
        if (ingredients.etat == 'entier') {
            ingredients.etat = 'coupé'
            console.log(`Je découpe ${ingredients.nom}`);

        }
    }
}

let poele = {
    nom : 'Poele',
    contenu : [],
    cuir(){
        setTimeout(()=> {this.contenu[0].etat = 'cuite';
        console.log(`Votre omelette est prête !`);
    }, 4000)
    } 
}


export {maison,epicerie,slimi,oeuf,huile,poivre,lait,chaktar,bol,couteau,poele,nullePart}