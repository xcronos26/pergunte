import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProvaPage } from '../prova/prova';
import { ServidorProvider } from '../../providers/servidorproviders/servidorproviders';

/**
 * Generated class for the Disciplina4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-disciplina4',
  templateUrl: 'disciplina4.html',
})
export class Disciplina4Page {
  qtd:any;
  nomeD:string = "4";
  perguntas:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public servidor:ServidorProvider) {this.getRetornar()}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Disciplina4Page');
  }
  goToProvaPage(){
    this.navCtrl.push (ProvaPage, {
      qtd: this.qtd,
      nomeD:this.nomeD,
      perguntas:this.perguntas
    });
  }

  getRetornar(){

    this.servidor.getPegarJava()
    .subscribe(
       data => this.perguntas = data,
       err => console.log(err)
     );
    

  }

}
