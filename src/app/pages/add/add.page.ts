import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WishesService } from '../../services/wishes.service';
import { List } from '../../models/list.model';
import { ItemList } from '../../models/list-item.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  list: List;
  itemName = '';

  constructor(private wishService: WishesService, private route: ActivatedRoute) {
    const taskId = this.route.snapshot.paramMap.get('taskId');
    this.list = wishService.getList(taskId);
  }

  ngOnInit() {
  }

  addItem(){
    if(this.itemName.length === 0){ return; }
    const itemNew = new ItemList(this.itemName);
    this.list.items.push(itemNew);
    this.itemName = '';
    this.wishService.saveStorage();
  }

  changeState(item: ItemList){
    const pendings = this.list.items.filter(item => !item.completed).length;
    if (pendings === 0) {
      this.list.finishedDate = new Date();
      this.list.completed = true;
    } else {
      this.list.finishedDate = null;
      this.list.completed = false;
    }
    console.info(this.list);
    this.wishService.saveStorage();
  }

}
