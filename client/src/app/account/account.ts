export class Account {
    id: string;
    name: string;
    amount: string;

    constructor(id: string, name: string, amount: string) {
        this.id = id;
        this.name = name;
        this.amount = amount;
    }

    //getters
    getId() {
        return this.id;
    }
    getName() {
        return this.id;
    }
    getAmount() {
        return this.id;
    }

    //setters
    setId(id:string) {
        this.id = id;
    }
    setName(name:string) {
        this.name = name;
    }
    setAmount(amount:string) {
        this.amount = amount;
    }
}
