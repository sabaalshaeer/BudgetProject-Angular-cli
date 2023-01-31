import { Component, OnInit } from '@angular/core';
import { Budget, Distination, Transaction } from 'src/app/bank';
import { HttpService } from 'src/app/services/http.service';




@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.css']
})
export class BudgetsComponent implements OnInit {
  public name = ""
  public type = ""
  public balance: number | undefined

  public distinations: Distination[] = []
  public house: any
  public car:any
  public personal: any
  public budgets: Budget[]=[]
  public transactions: Transaction[] = []
  public amount: any
  constructor(public Http:HttpService) { }

  ngOnInit(): void {
  }

  public getHouseBudget(){

  }

  // public getTotalHouseExp(): number {
  //   if (this.distinations = this.house ){
  //     let totalHouseBudget = 0;
  //    this.transactions.map((i: Transaction) => {
  //     totalHouseBudget += i.amount;
  //   });
  //   return totalHouseBudget
  //   }
  // }

}
