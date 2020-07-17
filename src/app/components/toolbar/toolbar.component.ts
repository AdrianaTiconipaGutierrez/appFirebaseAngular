import { Component, OnInit } from '@angular/core';

//MODALA

import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { ProductI } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private productS: ProductService, public dialog: MatDialog) { }

  ngOnInit(): void {
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
