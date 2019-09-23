import { Component, OnInit } from '@angular/core';
import { RequestService } from '@svc/request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Request } from '@model/request.class'
import { User } from '@model/user.class';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {
  request: Request = new Request();
  title: string = 'Request Edit';
  user: User;
  constructor(private requestSvc: RequestService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.request.id = params.id);
    this.requestSvc.get(this.request.id).subscribe(resp => {
      this.request = resp as Request;
    });
  }

  edit() {
    this.request.id = this.request.id;
    this.requestSvc.edit(this.request).subscribe(resp => {
      this.request = resp as Request;
      console.log(this.request);
      this.router.navigate(['/request/list']);
    });
  }

}
