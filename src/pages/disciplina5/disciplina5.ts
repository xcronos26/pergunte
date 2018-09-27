import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProvaPage } from '../prova/prova';

/**
 * Generated class for the Disciplina5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-disciplina5',
  templateUrl: 'disciplina5.html',
})
export class Disciplina5Page {
  qtd:any;
  nomeD:string ="JAVASCRIPT";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToProvaPage(){
    this.navCtrl.push (ProvaPage, {
      qtd: this.qtd,
      nomeD:this.nomeD
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Disciplina5Page');
  }

}
