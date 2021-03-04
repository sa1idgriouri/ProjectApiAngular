import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataservicesService } from './dataservices.service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService extends DataservicesService {

  constructor(http :HttpClient) {
    super('http://localhost:8000/api/services',http);
   }
}
