import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Transaction } from 'src/app/bank';
import { HttpService } from 'src/app/services/http.service';

// interface transaction {
//    transId: number | null
//    source: string
//    distination: string
//    description: string
//    amount: number
//    budget: number
// }

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  // transactions = this.Http.getAllTransaction();

// @Input() transaction: Transaction = new Transaction( null , '', '', '', 1, 1)
// // create an eventemitter for when the form submitted and send the value of transaction to new eventEmitter of tyoe transaction
// @Output() formSubmit: EventEmitter<Transaction>= new EventEmitter<Transaction>();

  public transId = ''
  public source = ''
  public distination = ''
  public description = ''
  public amount = ''
  public budget = ''


  // newtransactions: Transaction[] = new Array<Transaction>();



  constructor(public Http: HttpService) { }

  ngOnInit(): void {
  }

  // ####################### add function onSubmit to pass value of form on submit
  // onSubmit(form: NgForm) {
  //   this.formSubmit.emit(form.value)
  // }

  // addTransaction(newTransaction: Transaction) {
  //   this.newtransactions.push(newTransaction)
  // }
}

