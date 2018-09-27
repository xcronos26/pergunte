import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidorproviders/servidorproviders';

/**
 * Generated class for the ProvaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prova',
  templateUrl: 'prova.html',
})
export class ProvaPage {
  nomeDiciplina:any;
  qtdQ:any;
  diciplina:string;
  perguntas:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public servidor:ServidorProvider) {
    this.qtdQ = this.navParams.get('qtd');
    this.diciplina = this.navParams.get('nomeD');
    this.getRetornar();
    
  }
  getRetornar(){

    this.servidor.getPegar()
    .subscribe(
       data => this.perguntas = data,
       err => console.log(err)
     );

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProvaPage');
  }

}
