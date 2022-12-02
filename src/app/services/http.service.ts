import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private showAccount = false
  private showBudget = false
  private showTransaction = false
  private showDashbard = false
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
  public getShowDashbard(): boolean {
    return this.showDashbard
  }
  public startAccount() : void {
    this.showAccount = true
  }
  public startBudge() : void {
    this.showBudget = true

  }
  public startTransaction() : void {
    this.showTransaction = true
  }
  public startDashbard() : void {
    this.showDashbard = true
  }


}
