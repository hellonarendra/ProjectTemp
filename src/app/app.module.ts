import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AddNewComponent } from './add-new/add-new.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TablePackageComponent } from './table-package/table-package.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminHeaderComponent,
    AdminHeaderComponent,
    AddNewComponent,
    TablePackageComponent,
  ],
  imports: [
    MatSidenavModule,
    MatPaginatorModule,
    MatSliderModule,
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'admin-header', component: AdminHeaderComponent },
      // { path: '', redirectTo: 'admin-header', pathMatch: 'full' },
      { path: 'add-new', component: AddNewComponent },
      { path: 'table-package', component: TablePackageComponent },
    ]),
    NgbModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
