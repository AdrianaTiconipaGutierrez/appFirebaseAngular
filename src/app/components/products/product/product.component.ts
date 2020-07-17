import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ProductI } from 'src/app/models/product.interface';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public product$:Observable<ProductI>;
  constructor(private route: ActivatedRoute, private productS: ProductService) { }

  ngOnInit(): void {
    //recuperamos el id de la url
    const idProduct = this.route.snapshot.params.id;
    this.product$=this.productS.getProduct(idProduct);

  }

}
