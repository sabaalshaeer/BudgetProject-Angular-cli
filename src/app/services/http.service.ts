import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private showAccount = false
  private showBudget = false
  private showTransaction = false
  private showDashbord = false
  private loading = false


  constructor() { }

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


}
