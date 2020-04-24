import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  salir(){
    this.modalCtrl.dismiss();
  }

  // Este código funcionaría si fuera una App en Cordova, como 
  // no es el caso, como ya le comenté al profesor, no se puede
  // comprobar en la app, pero está realizado y debería funcionar

  /*
  salirDeCordova(){
    navigator['app'].exitApp();
  }*/

  ngOnInit() {
  }

}
