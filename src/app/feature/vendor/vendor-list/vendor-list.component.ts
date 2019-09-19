import { Component, OnInit } from '@angular/core';
import {VendorService} from '@svc/vendor.service'
import {Vendor} from '@model/vendor.class'

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  vendors: Vendor[];
  title: string = 'Vendor List'
   constructor (private vendorSvc:VendorService){ } //private vendorSvc:VendorService

  ngOnInit() { //populate list of vendors
    this.vendorSvc.list().subscribe(
      resp =>{
        console.log(resp);
        this.vendors=resp;
      }
    );
    }
}
