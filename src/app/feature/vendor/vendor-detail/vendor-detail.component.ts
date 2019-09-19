import { Component, OnInit } from '@angular/core';
import { VendorService } from '@svc/vendor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Vendor } from '@model/vendor.class';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {
vendor: Vendor = new Vendor();
title: string = 'Vendor Detail'
  constructor(private vendorSvc: VendorService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => {
    this.vendorSvc.get(parms.id).subscribe(resp => {
      this.vendor= resp as Vendor;
    console.log('vendor details for: ' + this.vendor.name);
    })
    });
  }
  remove() {
    this.vendorSvc.delete(this.vendor.id).subscribe(resp=> {
      alert('Vendor: '+this.vendor.name+' has been successfully delete!')
      this.router.navigateByUrl('vendor/list');
    },
    err =>{ 
      console.log('Error in deleting Vendor: ');
      console.log(err);
    });
    }

}
