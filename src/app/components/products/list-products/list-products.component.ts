//directiva viewvchild para pagiantor

import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { ProductService } from 'src/app/services/product.service';
import { ProductI } from 'src/app/models/product.interface';


import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../modal/modal.component';
// import Swal from 'sweetalert2';

// import { NewProductComponent } from 'src/app/productos/new-product/new-product.component';

//
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit, AfterViewInit {

  //
  displayedColumns: string[] = ['titleProduct', 'descriptionProduct','starsProduct','priceProduct','stockProduct','imageProduct', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  //

  constructor(private productS: ProductService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.productS.getProducts().subscribe(products => (this.dataSource.data = products));
  }
  //para nuestra paginator and sort doc angular material
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }
  //Paginator and sort


  onEditProduct(product: ProductI) {
    console.log('EDIT PRODUCT', product);
    this.openDialog(product);

  }

  onDeleteProduct(product: ProductI) {

    this.productS.deleteProduct(product).then(() => {
      console.log('Deleted', "THE PRODUCT  WAS DELETED");

    }).catch((error) => {
      console.log('Error', 'THERE WERE ERRORS');
    })
    console.log('delete');
  }

  onNewProduct() {
    this.openDialog();
    console.log('ADD PRODUCT');

  }
  openDialog(product?: ProductI): void {
    const config = {
      data: {
        message: product ? 'EDIT PRODUCT' : 'NEW PRODUCT',
        content: product
      }
    };
    const dialogRef = this.dialog.open(ModalComponent, config);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result ${result}`);
    });

  }

}
