import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ngxCsv } from 'ngx-csv/ngx-csv';


@Component({
  selector: 'app-list-transactions',
  templateUrl: './list-transactions.component.html',
  styleUrls: ['./list-transactions.component.css']
})
export class ListTransactionsComponent implements OnInit {
  transactions = [
    {transId: 1, source: "account1", distination: "house", description: "utilities", amount: 100, budget: 100},
    {transId: 2, source: "account1", distination: "car", description: "gas", amount: 100, budget: 100},
    {transId: 3, source: "account2", distination: "personal", description: "groucery", amount: 200, budget: 250},
    {transId: 4, source: "account2", distination: "personal", description: "clothing", amount: 150, budget: 300},
    {transId: 5, source: "account2", distination: "bills", description: "phone", amount: 200, budget: 200},
  ];

  constructor(public http:HttpService) { }

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
