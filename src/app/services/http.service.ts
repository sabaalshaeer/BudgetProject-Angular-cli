import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction, Account, Budget, Distination } from '../bank';
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
  private accounts: Account[] = []
  private budgets: Budget[] = []
  private showNewTransaction = false
  private showNewAccount = false



  constructor(public Http: HttpClient, private snackBar: MatSnackBar) {}

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

  public startAccount() : void {
    this.showAccount = true
    this.showBudget = false
    this.showTransaction = false
    this.showDashbord = false
    this.loadAccount()
  }
  private loadAccount(): void {
    this.loading = true
    this.Http.get<Account[]>('http://localhost:8080/accounts')
    .pipe(take(1))
    .subscribe({
      next: accounts => {
        console.log(accounts)
        this.accounts = [...accounts]
        this.loading = false
      }
    })
    }

    public getAccounts(): Account[] {
      return this.accounts
    }
    public getAllAccounts(): void {
      this.Http.get<Account[]>('http://localhost:3000/accounts')
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
    public isShowNewAccount(): boolean {
      return this.showNewAccount
    }
    public startNewAccount(): void {
      this.showNewAccount = true
    }

    public newAccount(name: string, type: string, balance: number): void {
      console.log("inside post")
      if( name === "" || type === "" || balance < 0) {
        this.showError("This New Account is invalid")
        return
      }
      this.showNewAccount = false
      this.Http.post('http://localhost:8080/accounts',{
        name: name,
        type : type,
        balance : balance
      }).pipe(take(1))
      .subscribe({
        next: () => {
          this.loadAccount()
        },
        error: () => {
          this.showError('Ooops, something wenttt wrong.....!')
        }
      })
    }

    public deleteAccount(id:number): void {
      this.Http.delete(`http://localhost:3000/accounts/${id}`)
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.loadAccount()

        },
        error: () => {
          this.showError('Ooops, something wenrtttttt wrong.....!')

        }
      })
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
  this.Http.get<Transaction[]>('http://localhost:8080/transactions')
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
    if( source === "" || distination === "" || description === "" || amount < budget) {
      this.showError("This New Transaction is invalid")
      return
    }
    this.showNewTransaction = false
    this.Http.post('http://localhost:8080/transactions',{
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
  public deleteTransaction(id:number): void {
    this.Http.delete(`http://localhost:3000/Transactions/${id}`)
    .pipe(take(1))
    .subscribe({
      next: () => {
        this.loadTransations()

      },
      error: () => {
        this.showError('Ooops, something wenr wrong.....!')

      }
    })
  }
  // public cancelNewTransaction(): void {
  //   this.showNewTransaction = false
  // }

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
  public startBudge() : void {
    this.showAccount = false
    this.showBudget = true
    this.showTransaction = false
    this.showDashbord = false
    this.loadBudget()

  }


  private loadBudget(): void {
    this.loading = true
    this.Http.get<Budget[]>('http://localhost:8080/budgets')
    .pipe(take(1))
    .subscribe({
      next: budgets => {
        console.log(budgets)
        this.budgets = [...budgets]
        this.loading = false
      }
    })
    }

    public getAllBudgets(): void {
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

    public getBudgets(): Budget[] {
      return this.budgets
    }



}


