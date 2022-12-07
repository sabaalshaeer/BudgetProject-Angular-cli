import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction, Bank_account, Budget, Distination } from '../bank';
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
  private distinations: Distination[] = []
  private transId: number | undefined
  private transactions : Transaction[] = []
  private accounts: Bank_account[] = []
  private budgets: Budget[] = []
  private showNewTransaction = false


  constructor(public Http: HttpClient, private snackBar: MatSnackBar) {
    // this.getAllTransaction()

    // const source = localStorage.getItem('source')
    // const distination = localStorage.getItem('distination')
    // const description =localStorage.getItem('description')
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
    this.loadAccount()
  }
  private loadAccount(): void {
    this.loading = true
    this.Http.get<Bank_account[]>('http://localhost:3000/bank_accounts')
    .pipe(take(1))
    .subscribe({
      next: accounts => {
        console.log(accounts)
        this.accounts = [...accounts]
        this.loading = false
      }
    })
    }
    public getAccounts(): void {
      this.Http.get<Bank_account[]>('http://localhost:3000/bank_accounts')
      .pipe(take(1))
      .subscribe({
        next: accountArray => {
          if (accountArray.length !== 1) {
            this.showError('there is no Bank-Account')
          } else {
            console.log(this.accounts)
            this.showAccount
          }
        },
        error: err => this.showError('Ooops, somthing went wrong!')
      })
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
    this.loadTransations()
    // this.getTransactions()
    // this.getAllTransactions()
  }
  private loadTransations(): void {
    this.loading = true
  this.Http.get<Transaction[]>('http://localhost:3000/transactions')
  .pipe(take(1))
  .subscribe({
    next: transactions => {
      console.log(transactions)
      this.transactions = [...transactions]
      this.loading = false
    },
  })
  }
  public getTransactions(): Transaction[] {
    return this.transactions
  }
  public getAllTransactions(): void {
    this.Http.get<Transaction[]>('http://localhost:3000/transactions')
    .pipe(take(1))
    .subscribe({
      next: transactionArray => {
        if (transactionArray.length !== 1) {
          this.showError('there is no transaction')
        } else {
          console.log(this.transactions)
          this.showTransaction
        }
      },
      error: err => this.showError('Ooops, somthing wrong happened')
    })
  }

  public isShowNewTransaction(): boolean {
    return this.showNewTransaction
  }
  public startNewTransaction(): void {
    this.showNewTransaction = true
  }
  public newTransaction(source: string, distination: string, description: string, amount: number, budget: number): void {
    console.log("inside post")
    this.showNewTransaction = false
    if( source === "" || distination === "" || description === "" || amount < 0 || budget < amount) {
      this.showError("This New Transaction is invalid")
      return
    }
    this.Http.post('http://localhost:3000/transactions',{
      source: source,
      description : description,
      distination : distination,
      amount: amount,
      budget: budget
    }).pipe(take(1))
    .subscribe({
      next: () => {
        this.loadTransations()
      },
      error: () => {
        this.showError('Ooops, something wenr wrong.....!')
      }
    })
  }
  public cancelNewTransaction(): void {
    this.showNewTransaction = false
  }

  


  public startDashbord() : void {
    this.showAccount = false
    this.showBudget = false
    this.showTransaction = false
    this.showDashbord = true
  }

  private showError(message: string) {
    this.snackBar.open(message, undefined, {
      duration: 2000
    })
  }

  public getBudgets(): void {
    this.Http.get<Budget[]>('http://localhost:3000/budgets')
    .pipe(take(1))
    .subscribe({
      next: budgetArray => {
        if (budgetArray.length !== 1) {
          this.showError('there is no Budget')
        } else {
          console.log(this.budgets)
          this.showBudget
        }
      },
      error: err => this.showError('Ooops, somthing went wrong!')
    })
  }


}


