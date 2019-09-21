import { Component, OnInit } from '@angular/core';
import { RequestService } from '@svc/request.service';
import {Request} from '@model/request.class'

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
title: string = 'Request List';
requests: Request[];

  constructor(private requestSvc: RequestService) { }

  ngOnInit() {//populate list of vendors
    this.requestSvc.list().subscribe(
      resp =>{ this.requests = resp as Request[];
        console.log(this.requests);
        
      }
    );
  
    }
}
