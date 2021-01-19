import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {
  lists: List[] = [];
  constructor() {
    //this.lists.push(listOne, listTwo);
  }

  createList(title: string){
    const list = new List(title);
    this.lists.push(list);
  }
}
