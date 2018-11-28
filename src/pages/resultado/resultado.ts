import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidorproviders/servidorproviders';

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
  perguntas:any = [];
  questoes:any= [];
  enunciado:any=[];
  resultado:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public servidor:ServidorProvider) {
    this.perguntas = this.navParams.get('questoes');   
    this.resultado = this.navParams.get('enunciado');   
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadoPage');
  }

  resultadodaprova(){
    

  }

}
