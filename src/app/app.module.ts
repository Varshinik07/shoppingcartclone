import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductlistComponent } from './productlist/productlist.component';
import{RouterModule,Routes} from '@angular/router';
import{HttpClientModule} from '@angular/common/http';
const appRoutes:Routes=[
  {
    path:"",component:ProductlistComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
