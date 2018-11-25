import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProvaPage } from '../prova/prova';
import { ServidorProvider } from '../../providers/servidorproviders/servidorproviders';

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
  nomeD:string ="5";
  perguntas:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public servidor:ServidorProvider) {this.getRetornar()}
  
  
  goToProvaPage(){
    this.navCtrl.push (ProvaPage, {
      qtd: this.qtd,
      nomeD:this.nomeD,
      perguntas:this.perguntas
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Disciplina5Page');
  }
  getRetornar(){

    this.servidor.getPegarJava()
    .subscribe(
       data => this.perguntas = data,
       err => console.log(err)
     );
    

  }
}
