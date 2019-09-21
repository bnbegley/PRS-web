import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '@svc/request.service';
import { Request } from '@model/request.class';
import { UserService } from '@svc/user.service';
import { User } from '@model/user.class';
import { SystemService } from '@svc/system.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {
request: Request = new Request();
title: string = 'Request Create';
user: User;
  constructor(private requestSvc: RequestService,
    private userSvc: UserService,
    private router: Router,
    private sysSvc: SystemService) { }

  ngOnInit() {
    this.user = this.sysSvc.data.user.instance;
    console.log(this.user);
  }
  

  create(){ 
    this.request.userId=this.user.id;
    this.request.user=null;
    this.request.status= 'New';
    this.requestSvc.create(this.request).subscribe( resp => {
   //success
   alert('This request: '+this.request+' has been successfully added!');
   console.log(resp);
   this.router.navigateByUrl('/request/list');
 },
 err=>{
   //error
   console.log(err);
 }
 );
  }
}

