import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Disciplina1Page } from '../pages/disciplina1/disciplina1';
import { Disciplina2Page } from '../pages/disciplina2/disciplina2';
import { Disciplina3Page } from '../pages/disciplina3/disciplina3';
import { Disciplina4Page } from '../pages/disciplina4/disciplina4';
import { Disciplina5Page } from '../pages/disciplina5/disciplina5';
import { ProvaPage } from '../pages/prova/prova';
import { ServidorProvider } from '../providers/servidorproviders/servidorproviders';
import { HttpModule } from '@angular/http';
import { ResultadoPage } from '../pages/resultado/resultado';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Disciplina1Page,
    Disciplina2Page,
    Disciplina3Page,
    Disciplina4Page,
    Disciplina5Page,
    ProvaPage,
    ResultadoPage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Disciplina1Page,
    Disciplina2Page,
    Disciplina3Page,
    Disciplina4Page,
    Disciplina5Page,
    ProvaPage,
    ResultadoPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServidorProvider,
    
  ]
})
export class AppModule {}
