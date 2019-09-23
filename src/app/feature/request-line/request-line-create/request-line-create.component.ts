import { Component, OnInit } from '@angular/core';
import { RequestLineService } from '@svc/request-line.service';
import { SystemService } from '@svc/system.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-line-create',
  templateUrl: './request-line-create.component.html',
  styleUrls: ['./request-line-create.component.css']
})
export class RequestLineCreateComponent implements OnInit {
title: string = 'Request Line Create'
request: Request
  constructor( private reqlineSvc: RequestLineService,
    private router: Router,
    private sysSvc: SystemService) { }

  ngOnInit() {   
     this.request = this.request;
    console.log(this.request);
  }


  
}
