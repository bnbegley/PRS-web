import { Component, OnInit } from '@angular/core';
import { RequestService } from '@svc/request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Request } from '@model/request.class';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {
request: Request;
title: string = "Request Detail";

  constructor(private requestSvc: RequestService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => {
      this.requestSvc.get(parms.id).subscribe(resp => {
        this.request= resp as Request; 
      console.log('Request details for: ' + this.request.id);
      })
      });
    }
    remove() {
      this.requestSvc.delete(this.request.id).subscribe(resp=> {
        alert('Request: '+this.request + ' has been successfully delete!')
        this.router.navigateByUrl('request/list');
      },
      err =>{ 
        console.log('Error in deleting Request: ');
        console.log(err);
      });
      }

}
