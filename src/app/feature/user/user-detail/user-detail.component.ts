import { Component, OnInit } from '@angular/core';
import { User } from '@model/user.class';
import { UserService } from '@svc/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User = new User();
  title: string = 'User Detail';
  constructor(private userSvc: UserService,
              private router: Router,
              private route: ActivatedRoute ) { }

  ngOnInit() {
    //get the Id from the web request, get the assocaited user record
    this.route.params.subscribe(parms => {
    this.userSvc.get(parms.id).subscribe(resp => {
      this.user=resp as User;
    console.log('user detail: ' + this.user.id);
    })
    });
  }

  remove() {
  this.userSvc.delete(this.user.id).subscribe(resp=> {
    alert('User: '+this.user.username+' has been successfully delete!')
    this.router.navigateByUrl('user/list');
  },
  err =>{ 
    console.log('Error in deleting user: ');
    console.log(err);
  });
  }

}
