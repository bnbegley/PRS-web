import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from '@svc/vendor.service';
import { Vendor } from '@model/vendor.class';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {
vendor: Vendor = new Vendor();
title: string = 'Vendor Edit';

  constructor(private vendorSvc: VendorService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    //get the user id from the request, get user from database
    this.route.params.subscribe(parms => {
      this.vendorSvc.get(parms.id).subscribe(resp => {
        this.vendor= resp as Vendor; //TODO
      console.log('vendor to edit: ' + this.vendor.name);
      })
      });
    
  }
  edit() { 
    this.vendorSvc.edit(this.vendor).subscribe( resp => {
    //success
    alert('Vendor: ' +this.vendor.name +' has been sucessfully updated!')
    console.log(resp);
    this.router.navigateByUrl('/vendor/list');
  },
  err=>{
    //error
    console.log(err);
  }
  );
  }

}
