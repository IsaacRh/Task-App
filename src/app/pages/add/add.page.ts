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

  constructor(private wishes: WishesService, private route: ActivatedRoute) {
    const taskId = this.route.snapshot.paramMap.get('taskId');
    this.list = wishes.getList(taskId);
  }

  ngOnInit() {
  }

  addItem(){
    if(this.itemName.length === 0){ return; }
    const itemNew = new ItemList(this.itemName);
    this.list.items.push(itemNew);
    this.itemName = '';
    this.wishes.saveStorage();
  }

}
