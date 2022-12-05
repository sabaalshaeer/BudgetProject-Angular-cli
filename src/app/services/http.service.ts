import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../bank';
import { transition } from '@angular/animations';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private showAccount = false
  private showBudget = false
  private showTransaction = false
  private showDashbord = false
  private loading = false
  private transId: number | undefined
  private transactions: Transaction[] = []


  constructor(public http: HttpClient, private snackBar: MatSnackBar) {
    // const account = localStorage.getItem('account')
    // const source = localStorage.getItem('source')
    // const distination = localStorage.getItem('distination')
    // const description =localStorage.getItem('description')
    // const amount = localStorage.getItem('number', number)
    // const budget = localStorage.getItem('1')

    // if (source !== null && distination !== null && description !== null && amount !== null ) {
    //   this.addTransaction( source ,distination , description, amount)
    // }
  }

  public getShowAccount(): boolean {
    return this.showAccount
  }
  public getShowBudget(): boolean {
    return this.showBudget
  }
  public getShowTransction(): boolean {
    return this.showTransaction
  }
  public getShowDashbord(): boolean {
    return this.showDashbord
  }
  public startAccount() : void {
    this.showAccount = true
    this.showBudget = false
    this.showTransaction = false
    this.showDashbord = false
  }
  public startBudge() : void {
    this.showAccount = false
    this.showBudget = true
    this.showTransaction = false
    this.showDashbord = false
  }
  public startTransaction() : void {
    this.showAccount = false
    this.showBudget = false
    this.showTransaction = true
    this.showDashbord = false
  }
  public startDashbord() : void {
    this.showAccount = false
    this.showBudget = false
    this.showTransaction = false
    this.showDashbord = true
  }

  public getTransactions(): Transaction[] {
    return this.transactions
  }

  // public addTransaction( source: string, distination: string, description: string,amount: number): void {
  //   this.http.get<Transaction[]>(`http://localhost:transactions?transId=${transId}`)
  //     .pipe(take(1))
  //     .subscribe({
  //       next: transactions => {
  //       console.log(this.transactions);
  //       this.transactions = transactions

  //     },
  //       error: err => {
  //         this.showError('Oops shomthing went wrong')

  //       }
  //   })
}


