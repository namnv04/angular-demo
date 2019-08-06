import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CoinService } from '../services/coin.service';


@Component({
  selector: 'app-coin-list',
  templateUrl: './coin.list.html',
  styleUrls: ['./coin.list.scss']
})
export class CoinListComponent implements OnInit {
  coins = [];
  loadingCoins = false;

  constructor(private coinService: CoinService) {
  }

  displayedColumns: string[] = ['rank', 'name', 'price', 'change'];
  dataSource = new MatTableDataSource([]);

  ngOnInit() {
    this.loadingCoins = true;
    this.getListOfCoins();
  }

  getListOfCoins() {
    this.coinService.getListOfCoin().subscribe(coins => {
      setTimeout(() => {
        this.coins = coins[`data`][`coins`];
        this.dataSource = new MatTableDataSource(this.coins);
        this.loadingCoins = false;
      }, 300);
    },
    error => {
      console.log(error);
    });
  }
}
