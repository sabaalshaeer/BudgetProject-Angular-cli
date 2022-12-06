import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Bank_account } from 'src/app/bank';

interface Bank_accounts {
  accId: number
  name: string
  type: string
  balance: number
}

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css']
})
export class BankAccountComponent implements OnInit {

  // accounts: Bank_accounts[] = Bank_account

  constructor(public Http:HttpService) {}
  ngOnInit(): void {
  }

}
