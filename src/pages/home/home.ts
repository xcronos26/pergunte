import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Disciplina1Page } from '../disciplina1/disciplina1';
import { Disciplina2Page } from '../disciplina2/disciplina2';
import { Disciplina3Page } from '../disciplina3/disciplina3';
import { Disciplina4Page } from '../disciplina4/disciplina4';
import { Disciplina5Page } from '../disciplina5/disciplina5';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goToDisciplina1Page () {
    this.navCtrl.push (Disciplina1Page);
    }
  goToDisciplina2Page () {
    this.navCtrl.push (Disciplina2Page);
    }
  goToDisciplina3Page () {
    this.navCtrl.push (Disciplina3Page);
    }
  goToDisciplina4Page () {
    this.navCtrl.push (Disciplina4Page);
    }
  goToDisciplina5Page () {
    this.navCtrl.push (Disciplina5Page);
    }

}
