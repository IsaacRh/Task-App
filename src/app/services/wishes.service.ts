import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {
  lists: List[] = [];
  constructor() {
    this.loadStorage();
  }

  createList(title: string){
    const list = new List(title);
    this.lists.push(list);
    this.saveStorage();
    return list.id;
  }

  getList(id: string | number){
    id = Number(id);
    return this.lists.find( list =>  list.id === id );
  }

  saveStorage(){
    localStorage.setItem('data', JSON.stringify(this.lists));
  }

  loadStorage(){
    if (localStorage.getItem('data')){
     this.lists = JSON.parse(localStorage.getItem('data'));
    }else{ 
      this.lists = [];
    }
  }
}
