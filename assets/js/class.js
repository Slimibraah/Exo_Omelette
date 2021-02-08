class Personne {
    constructor(nom,lieu,argent,mainDroite,mainGauche){
        this.nom = nom
        this.lieu = lieu
        this.argent = argent
        this.mainDroite = mainDroite
        this.mainGauche = mainGauche

        this.seDeplacer = (depart, destination) => {
            destination.personne.push(this)
            depart.personne.splice(indexof(this),1)
        }

        this.payerArticle = () => {

        }

        this.couper = () => {

        }
    }
}


class Lieu {
    constructor(nom,personne){
        this.nom = nom
        this.personne = personne
    }
}

class Ingredients {
    constructor(nom,etat,prix ){
        this.nom = nom
        this.etat = etat 
        this.prix = prix
    }
}

export {Personne,Lieu, Ingredients}
