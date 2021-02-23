import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = "https://dog.ceo/api/breeds/image/random"


  constructor(private http: HttpClient) { }


  listar(){
    return this.http.get<[]>(this.url)
  }
}
