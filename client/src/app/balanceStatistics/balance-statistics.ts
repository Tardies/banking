export class BalanceStatistics {
    id: string;
    balance: number[];

    constructor(id: string, balance: number[]) {
        this.id = id;
        this.balance = balance;
    }

    //getters
    getId() {
        return this.id;
    }
    getBalance() {
        return this.balance;
    }

    //setters
    setId(id:string) {
        this.id = id;
    }
    setBalance(balance: number[]) {
        this.balance = balance
    }
}
