import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CardDeck } from './card/shared/card.model';

@Injectable({
  providedIn: 'root'
})

export class CardService {

  private readonly HS_API_URL = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/';
  private readonly API_KEY = '2d63c29b37mshff1821908e7ca64p11e605jsn4a20b19bb01e';

  private headers: HttpHeaders = new HttpHeaders({
    'X-RapidAPI-Key': this.API_KEY
  });

  constructor(private http: HttpClient) { }

  public getAllCardDecks(): Observable<CardDeck[]> {
    return this.http.get<CardDeck[]>(
      this.HS_API_URL + 'info', { headers: this.headers }
    );
  }
}
