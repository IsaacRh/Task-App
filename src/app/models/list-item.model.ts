import { BoundElementProperty } from "@angular/compiler";

export class ItemList{
    desc: string;
    completed: Boolean;
    constructor(desc: string){
        this.desc = desc;
        this.completed = false;
    }
}