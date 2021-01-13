import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {
  lists: List[] = [];
  constructor() {
    const listOne = new List("First List");
    const listTwo = new List("second List");
    this.lists.push(listOne, listTwo);
  }
}
