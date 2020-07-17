import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ProductComponent } from './components/products/product/product.component';
import { ListProductsComponent } from './components/products/list-products/list-products.component';
import { NewProductComponent } from './components/products/new-product/new-product.component';
import { HomeComponent } from './components/home/home.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {  ReactiveFormsModule } from '@angular/forms';

//IMPORTACIONES DE ANGULAR FIRE
import {AngularFirestoreModule } from '@angular/fire/firestore';
//OJO EN VERSION FIRE 6 VAMBIO DE STORAGE BUCKET A BUCKET
import { AngularFireStorageModule, BUCKET} from '@angular/fire/storage';
import {AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { ModalComponent } from './components/modal/modal.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ListProductsComponent,
    NewProductComponent,
    HomeComponent,
    ToolbarComponent,
    ModalComponent,
    EditProductComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  entryComponents: [ModalComponent],
  providers: [{provide: BUCKET, useValue: 'gs://fir-angular-94580.appspot.com' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
