import { Component, OnInit } from '@angular/core';
import { VendorService } from '@svc/vendor.service';
import { Router } from '@angular/router';
import { Vendor } from '@model/vendor.class';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {
vendor: Vendor = new Vendor();
title: string = 'Vendor Create';
  constructor(private vendorSvc: VendorService,
              private router: Router) { }

  ngOnInit() {
  }

  create(){ 
     this.vendorSvc.create(this.vendor).subscribe( resp => {
    //success
    alert('This vendor: '+this.vendor.name+' has been successfully added!');
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
