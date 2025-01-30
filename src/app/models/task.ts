export class Task {
    id: string;
    description: string;
    edition: boolean;
    isChecked: boolean;
    terminationTime: Date;
    creationDate: Date;

    constructor(d: string, e:boolean, id:string){
        this.description = d;
        this.edition = e;
        this.isChecked = false;
        this.id =id;
        this.creationDate = new Date();
        this.terminationTime = new Date();
    }    


}
