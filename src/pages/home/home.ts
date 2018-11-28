import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Disciplina1Page } from '../disciplina1/disciplina1';
import { Disciplina2Page } from '../disciplina2/disciplina2';
import { Disciplina3Page } from '../disciplina3/disciplina3';
import { Disciplina4Page } from '../disciplina4/disciplina4';
import { Disciplina5Page } from '../disciplina5/disciplina5';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    Camera
  ]
})
export class HomePage {
  NomeU: string;
  notifications: any;
  img ="";

  constructor(public navCtrl: NavController, private camera: Camera) {

  }
  TirarFoto() {


    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      
      this.img = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }


  goToDisciplina1Page() {
    this.navCtrl.push(Disciplina1Page, {
      NomeU: this.NomeU,
      notifications: this.notifications,
      img: this.img
    });
  }
  goToDisciplina2Page() {
    this.navCtrl.push(Disciplina2Page);
  }
  goToDisciplina3Page() {
    this.navCtrl.push(Disciplina3Page);
  }
  goToDisciplina4Page() {
    this.navCtrl.push(Disciplina4Page);
  }
  goToDisciplina5Page() {
    this.navCtrl.push(Disciplina5Page);
  }



}
