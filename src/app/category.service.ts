import { Injectable } from '@angular/core';
import { Category } from './category';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient,) { }

  categoryUrl = "http://localhost/category";

  getCatagories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.categoryUrl);
  }
}
