import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProvaPage } from '../prova/prova';
import { ServidorProvider } from '../../providers/servidorproviders/servidorproviders';

/**
 * Generated class for the Disciplina1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-disciplina1',
  templateUrl: 'disciplina1.html',
})
export class Disciplina1Page {
  qtd:any;
  nomeD:any = "1";
  perguntas:any;
  NomeU:any;
  notifications:any;
  img ="";
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public servidor:ServidorProvider) {this.getRetornar()
      this.NomeU = this.navParams.get('NomeU');  
      this.notifications = this.navParams.get('notifications');  
      this.img = this.navParams.get('img');
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Disciplina1Page');
  }
  goToProvaPage(){
    this.navCtrl.push (ProvaPage, {
      qtd: this.qtd,
      nomeD:this.nomeD,
      perguntas:this.perguntas,
      NomeU:this.NomeU,
      notifications:this.notifications,
      img: this.img
      });
  }

  ;
  getRetornar(){

    this.servidor.getPegarJava()
    .subscribe(
       data => this.perguntas = data,
       err => console.log(err)
     );
    

  }

}
