import { Component, OnInit, Input } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { ProductI } from 'src/app/models/product.interface';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  private image: any;
  private imageOriginal: any;
//revcibir informacion nos pasa el mosal
  @Input() product: ProductI;
  constructor(private productS: ProductService) { }
  //Metodo recibe obj
  public editProductForm = new FormGroup({
    id: new FormControl('',Validators.required),
    titleProduct: new FormControl('',Validators.required),
    descriptionProduct: new FormControl('',Validators.required),
    priceProduct: new FormControl('',Validators.required),
    starsProduct: new FormControl('',Validators.required),
    stockProduct: new FormControl('',Validators.required),
    imageProduct: new FormControl('',Validators.required),

});
  ngOnInit(): void {
    this.image=this.product.imageProduct;
    this.imageOriginal=this.product.imageProduct;
    this.initValuesForm();
  }
  editProduct(product: ProductI){
    //PRODUCTPO YA TIEN IMAGEN HAY QUE SUSTITUIR 
    console.log('Img', this.image);
    console.log('original',this.imageOriginal);
    if(this.image == this.imageOriginal){
      product.imageProduct = this.imageOriginal;
      //call method
      this.productS.editProduct(product);
    } else {
      //call method con this.image
      this.productS.editProduct(product,this.image);

    }

  }
  handleImage(event: any):void{
    this.image= event.target.files[0];

  }
  //cargar valores del form
 private initValuesForm():void{
   this.editProductForm.patchValue({
     id: this.product.id,
     titleProduct: this.product.titleProduct,
     descriptionProduct: this.product.descriptionProduct,
     priceProduct: this.product.priceProduct,
     starsProduct: this.product.starsProduct,
     stockProduct: this.product.stockProduct,

   })
 }

}
