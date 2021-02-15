import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WishesService } from '../../services/wishes.service';
import { List } from '../../models/list.model';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @ViewChild(IonList) ionList : IonList;
  @Input() finished = true;
  constructor(public wishes: WishesService, private router: Router, private alertCtrl: AlertController) { }

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

  async editList(list: List){
    const alert = await this.alertCtrl.create({
      header: 'List New',
      inputs: [
        {
          name: 'title',
          type: 'text',
          value: list.title,
          placeholder: 'Type name list'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role:'cancel',
          handler: ()  => {
            console.info('Canceled');
            this.ionList.closeSlidingItems();
          }
        },
        {
          text: 'Save',
          handler: (data) => {
            console.info(data);
            this.wishes.editList(list.id, data.title);
            this.ionList.closeSlidingItems();
          }

        }
      ]
    });
    alert.present();
  }

  ngOnInit() {}

}
