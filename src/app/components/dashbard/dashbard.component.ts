import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-dashbard',
  templateUrl: './dashbard.component.html',
  styleUrls: ['./dashbard.component.css']
})
export class DashbardComponent implements OnInit {

  constructor(public Http: HttpService) { }

  ngOnInit(): void {
  }

}
