import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';


/*
  Generated class for the ServidorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServidorProvider {
  url:string= "https://xcronos2.000webhostapp.com/phpp/";

  constructor(public http: Http) {
    console.log('Hello ServidorProvider Provider');
  }

  getPegar(){
    return this.http.get(this.url+'pergunta.php').pipe(map(res => res.json()));
  }
  getPegarPHP(){
    return this.http.get(this.url+'pergunta-php.php').pipe(map(res => res.json()));
  }
  getPegarjavascript(){
    return this.http.get(this.url+'pergunta-javascript.php').pipe(map(res => res.json()));
  }
  getPegarPhayton(){
    return this.http.get(this.url+'pergunta-phayton.php').pipe(map(res => res.json()));
  }
  getPegarJava(){
    return this.http.get(this.url+'pergunta-java.php').pipe(map(res => res.json()));
  }
  getPegarJSON(){
    return this.http.get(this.url+'pergunta-json.php').pipe(map(res => res.json()));
  }
}
