import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataservicesService {

  constructor(private Url:string , private http:HttpClient) { }


  getAll(limit?:number)
  {
    return this.http.get(this.Url + '/' +limit);
  }

  getone(id:number)
  {
    return this.http.get(this.Url+'/show/'+id);
  }
}
