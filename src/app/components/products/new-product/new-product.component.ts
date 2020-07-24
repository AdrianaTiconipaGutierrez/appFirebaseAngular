import { Component, OnInit } from '@angular/core';
//FORMULARIOS REACTIVOS
import { FormGroup,FormControl, Validators } from '@angular/forms';
//SERVICE AND INTERFACE
import { ProductService } from 'src/app/services/product.service';
import { ProductI } from 'src/app/models/product.interface';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  private image:any;
  constructor(private productS: ProductService) { }
  public newProductForm = new FormGroup({
    titleProduct: new FormControl('',Validators.required),
    descriptionProduct: new FormControl('',Validators.required),
    priceProduct: new FormControl('',Validators.required),
    starsProduct: new FormControl('',Validators.required),
    stockProduct: new FormControl('',Validators.required),
    imageProduct: new FormControl('',Validators.required),
  });

  ngOnInit(): void {
  }
  addNewProduct(data:ProductI){
    console.log('PRUEBA DATOS',data);
    this.productS.uploadImage(data,this.image);

  }
  handleImage(event:any):void{
    this.image=event.target.files[0];
    console.log('IMAGE',this.image);
  }

}
