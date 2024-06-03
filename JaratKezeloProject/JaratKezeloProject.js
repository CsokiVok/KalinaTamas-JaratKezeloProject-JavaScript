class JaratKezelo{
    #jaratok=[];
    ujJarat(jaratSzam, repterHonnan, repterHova, indulas){
        if (jaratSzam == null) {
            throw new Error("A járatszám nem lehet null")
        }

        if (jaratSzam == "") {
            throw new Error("A járatszám nem lehet üres")
        }

        let index = 0;
        while (index < this.#jaratok.length && this.#jaratok[index].jaratSzam != jaratSzam) {
            index++;
        }

        if (index < this.#jaratok.length) {
            throw new Error("A megadott járat már létezik")
        }

        if (repterHonnan == null) {
            throw new Error("Az indulási hely nem lehet null")
        }

        if (repterHonnan == "") {
            throw new Error("Az indulási hely nem lehet üres")
        }

        if (repterHova == null) {
            throw new Error("Az érkezési hely nem lehet null")
        }

        if (repterHova == "") {
            throw new Error("Az érkezési hely nem lehet üres")
        }

        let i = 0;
        while (i < this.#jaratok.length && this.#jaratok[i].repterHonnan != repterHova) {
            i++;
        }

        if (i < this.#jaratok.length) {
            throw new Error("Az indulási és az érkezési hely nem lehet ugyan az")
        }

        if (indulas == null) {
            throw new Error("Az indulási idő nem lehet null")
        }

        if (indulas == "") {
            throw new Error("Az indulási idő nem lehet üres")
        }

        const jarat = {
            jarat: jaratSzam,
            indulasihely: repterHonnan,
            erkezesihely:repterHova,
            indulas: new Date(indulas),
            keses:0
        }
        this.#jaratok.push(jarat);
    }

    keses(jaratSzam, keses){
        const jarat = this.kereses[jaratSzam]
        indul = new Date(jarat.indulas);

        if (jaratSzam == null) {
            throw new Error("A járatszám nem lehet null")
        }

        if (jaratSzam == "") {
            throw new Error("A járatszám nem lehet üres")
        }
        
        if (keses == null) {
            throw new Error("A késési idő nem lehet null")
        }

        if (keses == "") {
            throw new Error("A késési idő nem lehet üres")
        }

        if(indul.setMinutes(indul.getMinutes()+keses) >= indul){
            jarat.keses += keses
        }
        else
        {
            throw new Error("A repülő nem indulhat hamarabb")
        }
    }

    mikorIndul(jaratSzam){
        const jarat = this.kereses[jaratSzam]
        veglegesindulas = new Date(jarat.indulas);
        jarat.indul = veglegesindulas.setMinutes(veglegesindulas.getMinutes()+this.kereses)
    }

    jaratokRepuloterrol(repter){
        if (repter == null) {
            throw new Error("A reptér nem lehet null")
        }

        if (repter == "") {
            throw new Error("A reptér nem lehet üres")
        }
        let jaratok = [];
        for (let i = 0; i < this.#jaratok.length; i++){
            if(this.#jaratok[i].repterHonnan == repter){
                jaratok.push(this.#jaratok[i].jaratSzam)
            }
        }
        return jaratok;
    }

    kereses(jaratSzam){
        if (jaratSzam == null) {
            throw new Error("A járatszám nem lehet null")
        }

        if (jaratSzam == "") {
            throw new Error("A járatszám nem lehet üres")
        }

        let index = 0;
        while (index < this.#jaratok.length && this.#jaratok[index].szamlaszam != szamlaszam) {
            index++;
        }
        if (index == this.#jaratok.length) {
            throw new Error("A megadott járatszám nem létezik számla");
        }

        return this.#jaratok[index]        
    }
}

