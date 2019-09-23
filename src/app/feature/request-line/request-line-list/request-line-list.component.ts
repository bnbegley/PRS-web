import { Component, OnInit } from '@angular/core';
import { RequestLineService } from '@svc/request-line.service';
import { RequestLine } from '@model/requestline.class';

@Component({
  selector: 'app-request-line-list',
  templateUrl: './request-line-list.component.html',
  styleUrls: ['./request-line-list.component.css']
})
export class RequestLineListComponent implements OnInit {
  title: string = 'Request Line List';
  reqline: RequestLine[];

  constructor(private reqlineSvc: RequestLineService
              ) { }

  ngOnInit() { //populate list of request lines
    
    this.reqlineSvc.list().subscribe(
    resp =>{ this.reqline = resp as RequestLine[];
      console.log(this.reqline);

  })
}
}
