import { Component, OnInit } from '@angular/core';
import { RequestLineService } from '@svc/request-line.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from '@svc/request.service';
import { RequestLine } from '@model/requestline.class';
import { Request } from '@model/request.class';
import { User } from '@model/user.class';
import { SystemService } from '@svc/system.service';
import { userInfo } from 'os';

@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent implements OnInit {
  title: string = 'Request Review';
  request: Request;
  requestline: RequestLine;
 
  constructor(
    private reqlineSvc: RequestLineService,
    private router: Router,
    private route: ActivatedRoute,
    private requestSvc: RequestService,
    private sysSvc : SystemService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.requestSvc.get(id).subscribe(resp =>
    { this.request = resp as Request });
  }

  setReject() {
    let id = this.route.snapshot.params.id;
    this.requestSvc.edit(this.request).subscribe(resp => {
      this.requestSvc.setRejected(this.request.id).subscribe(resp => {
        console.log("It worked!")
        this.router.navigateByUrl('request/review');
      });
    });
  }

  setApprove() {
    let id = this.route.snapshot.params.id;
    this.requestSvc.setApproved(id).subscribe(resp => { this.request = resp as Request });
    this.router.navigateByUrl('request/review');

  }
  refresh() {
    let id = this.route.snapshot.params.id;
    this.requestSvc.get(id).subscribe(resp => { this.request = resp as Request });
  }
}
