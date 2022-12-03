import { Component, OnInit } from '@angular/core';
// import { Accounts } from 'src/app/bank';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  // accounts: Accounts[] = [
  //   checking: 'Checking',
  //   saving: "Saving"
  // ];
// }

  constructor(public Http: HttpService) { }

  ngOnInit(): void {
  }

}
