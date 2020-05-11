import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    // loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'card-decks',
    loadChildren: () => import('./card-decks/card-decks.module').then( m => m.CardDecksPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cards/card-listing/:cardDeckGroup/:cardDeck',
    loadChildren: () => import('./card-listing/card-listing.module').then( m => m.CardListingPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
