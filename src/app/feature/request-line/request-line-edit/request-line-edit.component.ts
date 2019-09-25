import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '@svc/product.service';
import { RequestLineService } from '@svc/request-line.service';
import { Product } from '@model/product.class';
import { RequestLine } from '@model/requestline.class';
import { Request } from '@model/request.class';

@Component({
  selector: 'app-request-line-edit',
  templateUrl: './request-line-edit.component.html',
  styleUrls: ['./request-line-edit.component.css']
})
export class RequestLineEditComponent implements OnInit {
  title = 'Request Line Edit';
  id: number;
  products : Product[];
  product : Product;
  rl : RequestLine;
  req : Request;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private prodSvc: ProductService,
    private rlSvc: RequestLineService) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params.id);
    this.rlSvc.get(this.id).subscribe(resp => {
      this.rl = resp as RequestLine;
      this.prodSvc.list().subscribe(jresp=> {
        this.products = jresp as Product[];
      }); 
  });
}

edit() {
  this.rl.productId = this.rl.product.id;
  let requestId=this.rl.requestId;
  this.rlSvc.edit(this.rl).subscribe(resp => {
    this.rl = resp as RequestLine;
    console.log(this.rl);
    this.router.navigate([`/requestline/list/${requestId}`]);
  });
}

  
  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }

}
