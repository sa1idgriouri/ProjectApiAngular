import { Component, OnInit } from '@angular/core';
import { ProduitServicesService } from 'src/app/services/produit-services.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {

  constructor(private dataProduit : ProduitServicesService) { }
  numbre=6
  Produit :any = [];
  ngOnInit(): void {
    this.getall();
  }


  getall()
  {
    this.dataProduit.getAll(this.numbre).subscribe(res =>{
     this.Produit= res.data;
    console.log(res);
    })
  }

}
