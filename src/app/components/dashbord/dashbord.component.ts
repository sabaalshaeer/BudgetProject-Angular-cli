import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from 'src/app/bank';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  

  constructor(public Http: HttpService) { }

  ngOnInit(): void {
  }

  }


