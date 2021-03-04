import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './compenents/about/about.component';
import { ContactComponent } from './compenents/contact/contact.component';
import { HomeComponent } from './compenents/home/home.component';
import { PageNotFundComponent } from './compenents/page-not-fund/page-not-fund.component';
import { PostComponent } from './compenents/post/post.component';
import { ProduitComponent } from './compenents/produit/produit.component';
import { ProduitsComponent } from './compenents/produits/produits.component';
import { ServiceComponent } from './compenents/service/service.component';
import { ServicesComponent } from './compenents/services/services.component';
import { ShowpostComponent } from './compenents/showpost/showpost.component';
import { ShowservicesComponent } from './compenents/showservices/showservices.component';

const routes: Routes = [
  {path:"" ,component:HomeComponent},
  {path:"services" ,component:ServiceComponent},
  {path:"about" ,component:AboutComponent},
  {path:"produit" ,component:ProduitsComponent},
  {path:"contact" , component: ContactComponent},
  {path:"blog/:id" ,component:ShowpostComponent},
  {path:"services/:id" ,component:ShowservicesComponent},
  {path:"blog" ,component:PostComponent},
  {path:"**" ,component:PageNotFundComponent},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
