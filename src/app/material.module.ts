import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';


const angMaterial = [
  MatFormFieldModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatTableModule,
  MatInputModule,
  MatChipsModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule,
  MatSelectModule];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    angMaterial

  ], exports: [
    angMaterial

  ]
})
export class MaterialModule { }
