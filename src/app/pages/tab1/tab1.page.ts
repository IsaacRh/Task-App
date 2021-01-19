import { Component } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { List } from '../../models/list.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  constructor(public wishes: WishesService, 
              private router: Router,
              private alertCtrl: AlertController) {
  }

  async addList(){
    const alert = await this.alertCtrl.create({
      header: 'List New',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Type name list'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role:'cancel',
          handler: ()  => {
            console.info('Canceled');
          }
        },
        {
          text: 'Save',
          handler: (data) => {
            console.info(data);
            if (data.title.length === 0) {
              return;
            }
            this.wishes.createList(data.title);
          }

        }
      ]
    });
    alert.present();
    //this.router.navigateByUrl('/tabs/tab1/add');
  }
}
