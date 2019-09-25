import { Component, OnInit } from '@angular/core';
import { RequestLineService } from '@svc/request-line.service';
import { RequestLine } from '@model/requestline.class';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from '@svc/request.service';
import { Request } from '@model/request.class'


@Component({
  selector: 'app-request-line-list',
  templateUrl: './request-line-list.component.html',
  styleUrls: ['./request-line-list.component.css']
})
export class RequestLineListComponent implements OnInit {
  title: string = 'Request Line List';
  request: Request;
  requestline: RequestLine;
 

  constructor(private reqlineSvc: RequestLineService,
    private router : Router,
    private route: ActivatedRoute,
    private requestSvc : RequestService) { }

  ngOnInit() { //populate list of request lines
    let id = this.route.snapshot.params.id;
    this.requestSvc.get(id).subscribe(resp => {this.request = resp as Request});
}

submitForReview(){ 
  let id = this.route.snapshot.params.id;
  this.requestSvc.setReview(id).subscribe(resp => 
    {this.request = resp as Request});
   this.router.navigateByUrl('request/list');
  this.refresh();
}

setReject() {  
  let id = this.route.snapshot.params.id;
  this.requestSvc.setRejected(id).subscribe(resp => 
  {this.request = resp as Request});
  this.refresh();

}

setApprove(){ 
  let id = this.route.snapshot.params.id;
  this.requestSvc.setApproved(id).subscribe(resp => 
  {this.request = resp as Request});
  this.refresh();

}

refresh(){
  let id = this.route.snapshot.params.id;
    this.requestSvc.get(id).subscribe(resp => 
      {this.request = resp as Request});
}

remove(id:number) {
  this.reqlineSvc.delete(id).subscribe(resp=> { this.refresh();
    //this.router.navigateByUrl(`requestline/list/${requestId}`);
  },
  err =>{ 
    console.log(err);
  });

}
}
