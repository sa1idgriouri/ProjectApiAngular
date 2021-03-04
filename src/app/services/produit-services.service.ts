import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Z_DATA_ERROR } from 'zlib';
import { DataservicesService } from './dataservices.service';

@Injectable({
  providedIn: 'root'
})
export class ProduitServicesService extends DataservicesService {

  constructor(http: HttpClient) {
    super("http://localhost:8000/api/produits" , http);
  }
}
