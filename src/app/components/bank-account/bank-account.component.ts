import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Account } from 'src/app/bank';



@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css']
})
export class BankAccountComponent implements OnInit {

  public name = ""
  public type = ""
  public balance: number | undefined

  // accounts : Bank_accounts[] = Bank_account

  constructor(public Http:HttpService) {}

  ngOnInit(): void {
  }

}
