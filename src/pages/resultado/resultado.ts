import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidorproviders/servidorproviders';
import { Disciplina1Page } from '../disciplina1/disciplina1';

import { Home2Page } from '../home2/home2';

/**
 * Generated class for the ResultadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultado',
  templateUrl: 'resultado.html',
})
export class ResultadoPage {
  nomeD:any = "1";
  perguntas:any;
  qtds:any;
  NomeU:any;
  notifications:any;
  img="";
  constructor(public navCtrl: NavController, public navParams: NavParams, public servidor:ServidorProvider) {
    this.qtds = this.navParams.get('qtdQ');
    this.NomeU = this.navParams.get('NomeU');  
    this.notifications = this.navParams.get('notifications'); 
    this.img = this.navParams.get('img');
    
  }

  ionViewDidLoad() {
    console.log(this.qtds);
  }
  goToProvaPagedenovo(){
    this.navCtrl.push (Disciplina1Page,{
    NomeU:this.NomeU,
    notifications:this.notifications,
    img:this.img
    });
  }
  goToinicio(){
    this.navCtrl.push (Home2Page,{
      NomeU:this.NomeU,
    notifications:this.notifications,
    img:this.img
    });
  }
  resultadodaprova(){


  }

}
