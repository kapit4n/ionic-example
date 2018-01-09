import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { TodoBuyServiceProvider } from '../../providers/todo-buy-service/todo-buy-service';

/**
 * Generated class for the AddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
  providers: [ TodoBuyServiceProvider ],
})
export class AddPage {
  todoBuy: any;
  constructor(public navCtrl: NavController, public dataService: TodoBuyServiceProvider) {
    this.todoBuy = {};
  }

  save() {
    this.todoBuy.id = 0;
    this.todoBuy.done = false;
    this.dataService.save(this.todoBuy)
    .subscribe(data => {
      console.log(data);
    });
  }

}
