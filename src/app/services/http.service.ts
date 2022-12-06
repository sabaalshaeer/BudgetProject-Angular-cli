import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction, Bank_account, Budget } from '../bank';
import { transition } from '@angular/animations';
import { MatSnackBar } from '@angular/material/snack-bar';
import { pipe, take } from 'rxjs';
import { TitleStrategy } from '@angular/router';
import { Observable } from 'rxjs';



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
  private transactions : Transaction[] = []
  private account: Bank_account[] = []
  private budget: Budget[] = []


  constructor(public Http: HttpClient, private snackBar: MatSnackBar) {
    // this.getAllTransaction()

    const source = localStorage.getItem('source')
    const distination = localStorage.getItem('distination')
    const description =localStorage.getItem('description')
    // const amount = localStorage.getItem('1')
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
  public getloading(): boolean {
    return this.loading
  }
  public getTransId(): number | undefined {
    return  this.transId
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
    // localStorage.setItem('source', transition.source)
    this.loadTransations()


  }
  public startDashbord() : void {
    this.showAccount = false
    this.showBudget = false
    this.showTransaction = false
    this.showDashbord = true
  }

  // public getTransactions(): Transaction[] {
  //   return this.transactions
  // }

  private showError(message: string) {
    this.snackBar.open(message, undefined, {
      duration: 2000
    })
  }

  public getAccount(): void {
    this.Http.get<Bank_account[]>('http://localhost:3000/bank_accounts')
    .pipe(take(1))
    .subscribe({
      next: accountArray => {
        if (accountArray.length !== 1) {
          this.showError('there is no Bank-Account')
        } else {
          console.log(this.account)
          this.showAccount
        }
      },
      error: err => this.showError('Ooops, somthing wrong happened')
    })
  }

  public getBudget(): void {
    this.Http.get<Budget[]>('http://localhost:3000/budgets')
    .pipe(take(1))
    .subscribe({
      next: budgetArray => {
        if (budgetArray.length !== 1) {
          this.showError('there is no Bank-Account')
        } else {
          console.log(this.account)
          this.showBudget
        }
      },
      error: err => this.showError('Ooops, somthing wrong happened')
    })
  }

  public getTransaction(): void {
    this.Http.get<Transaction[]>('http://localhost:3000/transactions')
    .pipe(take(1))
    .subscribe({
      next: transactionArray => {
        if (transactionArray.length !== 1) {
          this.showError('there is no Bank-Account')
        } else {
          console.log(this.account)
          this.getShowTransction
        }
      },
      error: err => this.showError('Ooops, somthing wrong happened')
    })
  }

  private loadTransations() : void {
    this.Http.get<Transaction[]>('http://localhost:3000/transactions')
    .pipe(take(1))
    .subscribe({
      next: this.transactions => this.tranactions = transition,
    })
  } else {

  }


  // public getAllTransaction(): void {
  //   this.Http.get<Transaction[]>(`http://localhost:3000/transactions`)
  //     .pipe(take(1))
  //     .subscribe({
  //       next: transaction => {
  //       this.transactions = transaction
  //       console.log(this.transactions);
  //     },
  //       error: err => {
  //         this.showError('Oops shomthing went wrong')

  //       }
  //   })
  // }


