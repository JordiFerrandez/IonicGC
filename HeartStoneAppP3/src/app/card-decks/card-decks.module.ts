import { CardListComponent } from './../components/card-list/card-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardDecksPageRoutingModule } from './card-decks-routing.module';

import { CardDecksPage } from './card-decks.page';
import { ModalInfoPage } from '../modal-info/modal-info.page';
import { ModalInfoPageModule } from '../modal-info/modal-info.module';

@NgModule({
  entryComponents: [
    ModalInfoPage
  ], 
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardDecksPageRoutingModule,
    ModalInfoPageModule
  ],
  declarations: [CardDecksPage, CardListComponent]
})
export class CardDecksPageModule {}
