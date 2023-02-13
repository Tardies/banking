export class Come {
    id: String;
    come: number[];

    constructor(id: String, come:number[]) {
        this.id = id;
        this.come = come;
    }

    //getters
    getId() {
        return this.id;
    }
    getCome() {
        return this.come;
    }

    //setters
    setId(id:string) {
        this.id = id;
    }
    setCome(come: number[]) {
        this.come = come;
    }
}
