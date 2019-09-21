import { Component, OnInit } from '@angular/core';
import { Product } from '@model/product.class';
import { ProductService } from '@svc/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
product : Product = new Product();
title: string = 'Product Detail';

  constructor(private productSvc: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() { 
    this.route.params.subscribe(parms => {
    this.productSvc.get(parms.id).subscribe(resp => {
      this.product= resp as Product; 
    console.log('Product details for: ' + this.product.name);
    })
    });
  }
  remove() {
    this.productSvc.delete(this.product.id).subscribe(resp=> {
      alert('Product: '+this.product.name+' has been successfully delete!')
      this.router.navigateByUrl('product/list');
    },
    err =>{ 
      console.log('Error in deleting Product: ');
      console.log(err);
    });
    }

}
