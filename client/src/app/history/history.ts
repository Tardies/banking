export class History {
    id: string;
    name: string;
    place: string;
    come: string;
    amount: string;

    constructor(id: string, name:string, 
                place: string, come:string, 
                amount: string) {
                    this.id = id;
                    this.name = name;
                    this.place = place;
                    this.come = come;
                    this.amount = amount;
                }
    
    //getters
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getPlace() {
        return this.place;
    }
    getCome() {
        return this.come;
    }
    getAmount() {
        return this.amount;
    }

    //setters
    setId(id:string) {
        this.id = id;
    }
    setName(name: string) {
        this.name = name;
    }
    setPlace(place: string) {
        this.place = place;
    }
    setCome(come: string) {
        this.come = come;
    }
    setAmount(amount: string) {
        this.amount = amount;
    }
}
