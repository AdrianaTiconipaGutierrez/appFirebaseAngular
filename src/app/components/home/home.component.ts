import { Component, OnInit } from '@angular/core';
import { ProductI } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   //inyectamos nuestro servicio
 public products$:Observable<ProductI[]>;
  constructor(private productS: ProductService ) { }

  ngOnInit(): void {
    this.productS.getProducts().subscribe(res => console.log('PROYECTOS',res))
    this.products$=this.productS.getProducts();
  }
  

}
