import { Component, OnInit, ViewChild } from '@angular/core';
import { CoinService } from '../services/coin.service';

@Component({
  selector: 'app-coin-converter',
  templateUrl: './coin.converter.html',
  styleUrls: ['./coin.converter.scss']
})
export class CoinConverterComponent implements OnInit {

  coins = [];
  fromValue = 0;
  fromCoin = 'BTC';
  toValue = 0;
  toCoin = 'ETH';

  constructor(private coinService: CoinService) {}

  ngOnInit() {
    this.getListOfCoins();
  }

  onFormChange() {
    if (this.fromValue <= 0) {
      this.toValue = 0;
    } else if (this.fromCoin === '' || this.toCoin === '') {
      this.toValue = 0;
    } else {
      const fromCoin = this.coins.find(c => c.symbol === this.fromCoin);
      const toCoin = this.coins.find(c => c.symbol === this.toCoin);
      this.toValue = this.fromValue * (fromCoin.price / toCoin.price);
    }
  }

  getListOfCoins() {
    this.coinService.getListOfCoin().subscribe(coins => {
      this.coins = coins[`data`][`coins`];
    },
    error => {
      console.log(error);
    });
  }
}
