import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidorproviders/servidorproviders';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { ResultadoPage } from '../resultado/resultado';

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
  diciplina:any;
  perguntas:any = [];
  questoes:any= [];
  teste:any;
  NomeU:any;
  notifications:any;
  img="";

  constructor(public navCtrl: NavController, public navParams: NavParams, public servidor:ServidorProvider) {
    this.qtdQ = this.navParams.get('qtd');
    this.diciplina = this.navParams.get('nomeD');
    this.questoes = this.navParams.get('perguntas');    
    this.NomeU = this.navParams.get('NomeU');  
    this.notifications = this.navParams.get('notifications'); 
    this.img = this.navParams.get('img');
    this.listarPerguntas();
  }

  
listarPerguntas(){
  var i = 0;
do {
  this.perguntas[i] = this.questoes[i];
    i++;
}
while (i < this.qtdQ);   
}


  ionViewDidLoad() {
    console.log(this.questoes,this.NomeU);
  }

  goToresult(){
  this.navCtrl.push (ResultadoPage, {
    qtdQ: this.qtdQ,
    NomeU:this.NomeU,
    notifications:this.notifications,
    img:this.img
  });
}

}