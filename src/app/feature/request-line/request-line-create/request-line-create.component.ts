import { Component, OnInit } from '@angular/core';
import { RequestLineService } from '@svc/request-line.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestLine } from '@model/requestline.class';
import { Product } from '@model/product.class';
import { ProductService } from '@svc/product.service';

@Component({
  selector: 'app-request-line-create',
  templateUrl: './request-line-create.component.html',
  styleUrls: ['./request-line-create.component.css']
})
export class RequestLineCreateComponent implements OnInit {
title: string = 'Request Line Create';
products: Product[];
rl: RequestLine = new RequestLine();
nrl:number;




  constructor( private rlSvc: RequestLineService, 
    private prodSvc: ProductService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {   
     this.nrl = this.route.snapshot.params.id;
    
     this.prodSvc.list().subscribe(
       resp =>{ this.products = resp as Product[];
      });
  }

  create() {
    this.rl.requestId = +this.nrl;
      this.rlSvc.create(this.rl)
        .subscribe(
          resp => { // success
            console.log(resp);
            this.router.navigate([`/requestline/list/${this.nrl}`]);
          },
          err => { // error
            console.error("Not Allowed");
            
          }
         
        ); 
}
}