import { Injectable } from '@angular/core';
//FIRESTORE ==> angular fire
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';

//MODELO ==> interfaces

import { ProductI } from '../models/product.interface';

//STORAGE
import { AngularFireStorage } from '@angular/fire/storage';
import { FileI } from '../models/file.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsCollection: AngularFirestoreCollection<ProductI>;
  private filePath:any;
  private downloadURL: Observable<string>;


  constructor(private afs: AngularFirestore, private storage:AngularFireStorage) {
    this.productsCollection=afs.collection<ProductI>('products');
   };
//recuperamos todos los productos
   public getProducts():Observable<ProductI[]>{
    return this.afs.collection('products')
    .snapshotChanges()
    .pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as ProductI;
          const id = a.payload.doc.id;
          console.log('PRUENAB ID..DATA: ',{id, ...data});
          return {id,...data}
        })
        )
    )
  }

public getProduct(id:ProductI):Observable<ProductI>{
    return this.afs.doc<ProductI>(`products/${id}`).valueChanges();
}
public deleteProduct(product:ProductI){
  return this.productsCollection.doc(product.id).delete();

}
public editProduct(product:ProductI, newImage?: FileI){
  // return this.productsCollection.doc(product.id).update(product);
  if(newImage){
    this.uploadImage(product, newImage);
  } else {
    return this.productsCollection.doc(product.id).update(product);
  }
 
 }
 
 //METODO INTERMEDAIDOR
 public preAddAndUpdateProduct(product:ProductI,image:FileI):void{
  this.uploadImage(product,image);
 }
 
 //CREAMOS DOS PROCESO SUBIR LAS IMAGENES Y FIREABSE NOS DA UNA URL Y ESO GUARDAMOS
 private saveProduct(product:ProductI){
   console.log('PRODUCTO', product)
   const productObj={
     titleProduct: product.titleProduct,
     descriptionProduct: product.descriptionProduct,
     priceProduct: product.priceProduct,
     stockProduct: product.stockProduct,
     starsProduct: product.starsProduct,
     imageProduct:this.downloadURL,
     fileRef:this.filePath,
 
   };
   if( product.id) {
     return this.productsCollection.doc(product.id).update(productObj);
   }else{
     return this.productsCollection.add(productObj);
   }
   
 
 }
 //METODO PARA SUBIR LA IMAGEN 1
 private uploadImage(product:ProductI, image:FileI){
//FICHERO
 this.filePath =`images/${image.name}`;
 const fileRef=this.storage.ref(this.filePath);
 const task = this.storage.upload(this.filePath, image);
 task.snapshotChanges()
 .pipe(
   finalize(() => {
     fileRef.getDownloadURL().subscribe(urlImage => {
       this.downloadURL=urlImage;
       console.log('URL-IMAGE',urlImage);
       console.log('PRODUCT',product);
       //CALL EL METODO GUARDA EL POST
 
       this.saveProduct(product);
 
     });
   })
 ).subscribe();
  
 }
   

}
