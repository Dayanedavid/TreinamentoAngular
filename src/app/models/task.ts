export class Task {
    id: number;
    description: string;
    edition: boolean;
    isChecked: boolean;

    constructor(d: string, e:boolean, id:number){
        this.description = d;
        this.edition = e;
        this.isChecked = false;
        this.id =id;
    }


}
