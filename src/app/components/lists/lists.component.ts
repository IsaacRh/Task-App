import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { WishesService } from '../../services/wishes.service';
import { List } from '../../models/list.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @Input() finished = true;
  constructor(public wishes: WishesService, private router: Router) { }

  selectedList(list: List){
    if (this.finished) {
      this.router.navigateByUrl(`/tabs/tab2/add/${list.id}`); 
    } else {
      this.router.navigateByUrl(`/tabs/tab1/add/${list.id}`);
    }
  }

  deleteList(list: List){
    this.wishes.deleteList(list);
  }

  ngOnInit() {}

}
