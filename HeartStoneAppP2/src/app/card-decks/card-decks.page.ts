import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';
import { CardDeck } from '../models/card-deck';

@Component({
  selector: 'app-card-decks',
  templateUrl: './card-decks.page.html',
  styleUrls: ['./card-decks.page.scss'],
})
export class CardDecksPage implements OnInit {

  readonly mockupFile: string= "./assets/data/carddecks.json";

  cardDecks: CardDeck [];

  selectedCDs: string[] = [];

  constructor() { }

  ngOnInit() {
    this.getData();
  }

  select(name: string){
    console.log(name);
    var esta = this.selectedCDs.indexOf(name);

    if(esta === -1){
      this.selectedCDs.push(name);
    }

    else{
      this.selectedCDs.splice(esta, 1);
    }
  }

  public getData(){
    fetch(this.mockupFile).then(res => res.json())
        .then(json => {
          this.cardDecks = json;
        });
  }


}
