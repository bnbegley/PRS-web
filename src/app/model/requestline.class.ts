import { Vendor } from './vendor.class';
import { Product } from './product.class';

export class RequestLine {
id: number;
requestId: number;
productId: number;
quantity: number;
vendor: Vendor;
product: Product;


constructor(id: number = 0, requestId: number = 0, productId: number = 0, quantity: number = 0,
    vendor: Vendor = new Vendor(), product:Product = new Product()) {

        this.id = id;
        this.requestId=requestId;
        this.productId=productId;
        this.quantity=quantity;
        this.vendor=vendor;
        this.product=product;

}

}