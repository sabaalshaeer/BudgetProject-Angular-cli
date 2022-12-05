import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Transaction } from 'src/app/bank';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {


  public transId = ''
  public source = ''
  public distination = ''
  public description = ''
  public amount = ''
  public budget = ''



  constructor(public Http: HttpService) { }

  ngOnInit(): void {
  }



}
