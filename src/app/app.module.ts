import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {HttpClientModule}  from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataservicesService } from './services/dataservices.service';
import { PostServiceService } from './services/post-service.service';

import { HomeComponent } from './compenents/home/home.component';
import { BlogComponent } from './compenents/blog/blog.component';
import { ContactComponent } from './compenents/contact/contact.component';
import { AboutComponent } from './compenents/about/about.component';
import { MenuComponent } from './compenents/menu/menu.component';
import { FooterComponent } from './compenents/footer/footer.component';
import { ShowpostComponent } from './compenents/showpost/showpost.component';
import { ShowservicesComponent } from './compenents/showservices/showservices.component';
import { SlideComponent } from './compenents/slide/slide.component';
import { ServicesComponent } from './compenents/services/services.component';
import { PostsComponent } from './compenents/posts/posts.component';
import { ProduitComponent } from './compenents/produit/produit.component';
import { PageNotFundComponent } from './compenents/page-not-fund/page-not-fund.component';
import { PostComponent } from './compenents/post/post.component';
import { ServiceComponent } from './compenents/service/service.component';
import { ProduitsComponent } from './compenents/produits/produits.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    ContactComponent,
    AboutComponent,
    MenuComponent,
    FooterComponent,
    ShowpostComponent,
    ShowservicesComponent,
    SlideComponent,
    ServicesComponent,
    PostsComponent,
    ProduitComponent,
    PageNotFundComponent,
    PostComponent,
    ServiceComponent,
    ProduitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
  providers: [DataservicesService , PostServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
