import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';




@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.css']
})
export class BudgetsComponent implements OnInit {

  constructor(public Http:HttpService) { }

  ngOnInit(): void {
  }

}
