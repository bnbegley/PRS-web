import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@svc/user.service';
import { SystemService } from '@svc/system.service';
import { User } from '@model/user.class';

@Component({
  selector: 'app-user-authentication',
  templateUrl: './user-authentication.component.html',
  styleUrls: ['./user-authentication.component.css']
})
export class UserAuthenticationComponent implements OnInit {
  message: any;
  user: User = new User(0, '', '', '', '', '', '', false, false);

  constructor(private userSvc: UserService, private sysSvc: SystemService, private router: Router) { }

  login() {
    this.userSvc.login(this.user.username, this.user.password).subscribe(resp => {
        this.user = resp as User;
        this.sysSvc.data.user.instance = this.user;
        this.sysSvc.data.user.loggedIn = true;
        this.router.navigateByUrl('/request/list');

    }, err => {
      this.message = 'Login authentication failure. Please try again.';
    }
    );
  }
 
  ngOnInit() {

  }

}
