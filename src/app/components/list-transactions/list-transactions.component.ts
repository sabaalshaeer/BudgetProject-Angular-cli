import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ngxCsv } from 'ngx-csv/ngx-csv';

import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-list-transactions',
  templateUrl: './list-transactions.component.html',
  styleUrls: ['./list-transactions.component.css']
})
export class ListTransactionsComponent implements OnInit {
  transactions = [
    {transId: 1, source: "checking", distination: "house", description: "utilities", amount: 100, budget: 100},
    {transId: 2, source: "saving", distination: "car", description: "gas", amount: 100, budget: 100},
    {transId: 3, source: "checking", distination: "personal", description: "groucery", amount: 200, budget: 250},
    {transId: 4, source: "checking", distination: "personal", description: "clothing", amount: 150, budget: 300},
    {transId: 5, source: "saving", distination: "bills", description: "phone", amount: 200, budget: 200},
  ];

  displayedColumns: string[] = ['transId', 'source', 'distination', 'description', 'amount' , 'budget'];
  dataSource = new MatTableDataSource(this.transactions);

  constructor(public http:HttpService , private _liveAnnouncer: LiveAnnouncer) { }

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

   /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }


  ngOnInit(): void {
  }

  fileDownLoad(){
    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'Report Transactions',
      useBom: true,
      noDownload: false,
      headers: ["TransId", "Source", "Distination", "Description", "Amount", "budget"]
    };

    new ngxCsv(this.transactions, 'Report', options);
  }
}
