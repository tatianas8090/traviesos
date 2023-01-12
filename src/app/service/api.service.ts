import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string= 'https://api.whatsapp.com/send?phone=573192600888&text=Hola';
  lb: string= '%0A';

  constructor() {}

  skipLine(sentence: string){
    const urlBase = 'https://api.whatsapp.com/send?phone=573192600888&text=Hola';
     this.url=urlBase.concat(this.lb,sentence,this.lb);
  }

  contact(product: string):string{
    this.skipLine('Me interesan estos productos'+' '+product+' ')
    return this.url

  }

}
