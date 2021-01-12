import { ItemList } from './list-item.model';
export class List{
    id: number;
    title: string;
    createdDate: Date;
    finishedDate: Date;
    completed: Boolean;
    items: ItemList[];
    constructor(title: string){
        this.title = title;
        this.createdDate = new Date();
        this.completed = false;
        this.items = [];
        this.id = new Date().getTime();
    }
}