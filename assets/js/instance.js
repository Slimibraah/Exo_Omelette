import {Personne,Lieu, Ingredients} from './class.js'

// Lieu
let maison = new Lieu('Maison',[])
let epicerie = new Lieu('Epicerie',[])
epicerie.bacpaniers = [
    {nom:'panier 1', contenu : []},
    {nom:'panier 2', contenu : []},
    {nom:'panier 3', contenu : []},
]

epicerie.ingredients = []

// Personnes
let Salim = new Personne('Salim',maison,2000,[],[])

// Ingredients

let oeuf = new Ingredients('Oeuf','entier',2)
let sel = new Ingredients('sel','moulu',1)
let chaktar = new Ingredients('chaktar','entier',2)
let huiledo = new Ingredients('huiledo','liquide',2)
let poivron = new Ingredients('poivron','entier',3,50)

// objet simples 
let bolle = {
    nom : 'Bolle',
    contenu : [],
    melanger(nommelange){
        let newMelange = {
            nom : nommelange,
            etat : 'pas cuit'
        }
        while (this.contenu.length > 0) {
            this.contenu.shift();
            
        }
        this.contenu.push(newMelange)
    }
}

let couteau = {
    nom : 'Couteau',
    couper = (ingredients) => {
        if (ingredients.etat == 'entier') {
            ingredients.etat = 'coupé'
            console.log('Je découpe ${ingredients.nom}');

        }
    }
}
let poele = {
    nom : 'Poele',
    contenu : []
    
}