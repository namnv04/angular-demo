import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';


export interface Coin {
  rank: string;
}

@Injectable({
  providedIn: 'root',
})
export class CoinService {
  private coinListURL = 'https://api.coinranking.com/v1/public/coins';

  constructor(private http: HttpClient) { }

  getListOfCoin(): Observable<Coin[]> {
    return this.http.get<Coin[]>(this.coinListURL);
  }
}
