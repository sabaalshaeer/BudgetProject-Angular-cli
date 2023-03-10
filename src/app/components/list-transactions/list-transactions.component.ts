import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Transaction } from 'src/app/bank';
import {ThemePalette} from '@angular/material/core';


@Component({
  selector: 'app-list-transactions',
  templateUrl: './list-transactions.component.html',
  styleUrls: ['./list-transactions.component.css']
})

export class ListTransactionsComponent implements OnInit {
  @Input() transaction: Transaction | undefined


  public transId = ''
  public source = ''
  public distination = ''
  public description = ''
  public amount: number | undefined
  public budget: number | undefined

  transactions: Transaction[] = []
  sortedData: Transaction[] | undefined;


  constructor(public Http: HttpService , private _liveAnnouncer: LiveAnnouncer) {
    this.sortedData = this.transactions.slice();
    }

  ngOnInit(): void {
  }

  sortData(sort: Sort) {
    const data = this.transactions.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'source':
          return compare(a.source, b.source, isAsc);
        case 'distination':
          return compare(a.distination, b.distination, isAsc);
        case 'description':
          return compare(a.description, b.description, isAsc);
        case 'amount':
          return compare(a.amount, b.amount, isAsc);
        case 'budget':
          return compare(a.budget, b.budget, isAsc);
        default:
          return 0;
      }
    });
    function compare(a: number | string, b: number | string, isAsc: boolean) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
  }

  // public getTotalTransaction(transactions: Transaction[]): number {
  //     let totalTransaction = 0;
  //    transactions.map((i: Transaction) => {
  //     totalTransaction += i.amount;
  //   });
  //   return totalTransaction

  // }

  public getTotalTransaction(transactions: Transaction[]): number {
    let totalTransaction = 0;
    transactions.map((i: Transaction) => {
      if (i.amount) {
        totalTransaction += i.amount;
      }
    });
    return totalTransaction;
  }

  public getTotalTransactionByDistination(transactions: Transaction[], distination: string): number {
    let totalTransaction = 0;
    transactions.map((i: Transaction) => {
      if (i.distination === distination) {
        totalTransaction += i.amount;
      }
    });
    return totalTransaction;
  }

 


}







