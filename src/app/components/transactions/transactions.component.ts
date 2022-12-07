import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Transaction } from 'src/app/bank';
import { HttpService } from 'src/app/services/http.service';

interface transaction {
  transId: number | null
  source: string
  distination: string
  description: string
  amount: number
  budget: number
}



@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {





  constructor(public Http: HttpService) { }

  ngOnInit(): void {
  }


}

