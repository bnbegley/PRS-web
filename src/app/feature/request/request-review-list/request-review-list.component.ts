import { Component, OnInit } from '@angular/core';
import { RequestService } from '@svc/request.service';
import { User } from '@model/user.class';
import { SystemService } from '@svc/system.service';

@Component({
  selector: 'app-request-review-list',
  templateUrl: './request-review-list.component.html',
  styleUrls: ['./request-review-list.component.css']
})
export class RequestReviewListComponent implements OnInit {
  requests : Request[];
  title : "Request Review";
  loggedInUser: User;

  constructor(private reqSvc : RequestService,
    private sysSvc: SystemService) { }

  ngOnInit() {

    this.loggedInUser = this.sysSvc.data.user.instance.username;
    this.reqSvc.getForReview().subscribe(resp =>{
      console.log("review list");
      this.requests = resp as Request[];
    });

  }

}
