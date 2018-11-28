import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidorproviders/servidorproviders';
import { Disciplina1Page } from '../disciplina1/disciplina1';

/**
 * Generated class for the Home2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home2',
  templateUrl: 'home2.html',
})
export class Home2Page {
  NomeU:any;
  notifications:any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public servidor:ServidorProvider) {
    this.NomeU = this.navParams.get('NomeU');  
    this.notifications = this.navParams.get('notifications'); 
  
  }

  ionViewDidLoad() {
    console.log(this.NomeU);
  }
  goToDisciplina1Page () {
    this.navCtrl.push (Disciplina1Page,{
      NomeU:this.NomeU,
      notifications:this.notifications
    });
    }

}
