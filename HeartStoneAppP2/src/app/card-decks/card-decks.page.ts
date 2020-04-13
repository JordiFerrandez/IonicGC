import { CardDeckComponent } from './../card-deck/card-deck.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';
import { CardDeck } from '../models/card-deck';

@Component({
  selector: 'app-card-decks',
  templateUrl: './card-decks.page.html',
  styleUrls: ['./card-decks.page.scss'],
})
export class CardDecksPage implements OnInit {

  readonly mockupFile: string = "./assets/data/carddecks.json";

  @ViewChild('hijo', ({static: true})) componenteHijo: CardDeckComponent;

  cardDecks: CardDeck [];

  selectedCDs: CardDeck[] = [];

  constructor() { }

  ngOnInit() {
    console.log(this.componenteHijo);
    this.getData();
  }

  // COMO ESTABA SIN LA OPCIONAL

  /*select(name: string){
    var esta = this.selectedCDs.indexOf(name);

    if(esta === -1){
      this.selectedCDs.push(name);
    }

    else{
      this.selectedCDs.splice(esta, 1);
    }
  }*/

  select(name: string){
    var esta = false;

    if(this.selectedCDs.length != 0){
      for(var x in this.selectedCDs){
        if(this.selectedCDs[x].name == name){
          esta = true;
          var aux = this.selectedCDs[x];
          this.selectedCDs.splice(this.selectedCDs.indexOf(aux),1);
          break;
        }
      }
    }

    if(esta == false){
      for(var i in this.cardDecks){
        if(this.cardDecks[i].name == name){
          this.selectedCDs.push(this.cardDecks[i]);
        }
      }
    }
  }

  public getData(){
    fetch(this.mockupFile).then(res => res.json())
        .then(json => {
          this.cardDecks = json;
        });
  }


}
