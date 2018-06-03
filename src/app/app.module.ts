import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { NewItemComponent } from './new-item/new-item.component';



@NgModule({
  declarations: [
    AppComponent,
    NewItemComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatChipsModule,
    MatButtonModule,
    RouterModule.forRoot([
      // {
      //   path: 'new-user',
      //   component: NewUserComponent
      // },
      // {
      //   path: 'user-list',
      //   component: UserListComponent
      // }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
