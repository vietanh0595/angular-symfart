import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Article } from './article';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient,) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Method': 'POST'
      // 'Access-Control-Allow-Origin': 'http://localhost',
      // 'Origin': 'http://localhost:4201'
      // 'Access-Control-Request-Headers': 'Content-Type',

   })
  };


  getArticlesByCat(catId:number): Observable<Article[]> {
    let url = `http://localhost/category/${catId}`;
    return this.http.get<Article[]>(url);
  }

  getAllArticles(): Observable<Article[]> {
    let url = 'http://localhost';
    return this.http.get<Article[]>(url);
  }

  addArticle(article:Article, catId:number): Observable<Article> {
    let url ='http://localhost/article/catagory/new';
    return this.http.post<Article>(url, {article: article, catId: catId}, this.httpOptions)
  }

  deleteArticle(article:Article): Observable<Article> {
    const id = +article.id;
    const url = `http://localhost/article/delete/${id}`;

    return this.http.delete<Article>(url, this.httpOptions)
  }

  getArticle(id: number): Observable<Article> {
    let url = `http://localhost/article/${id}`;
    return this.http.get<Article>(url);
  }

  searchArticles(term: string): Observable<Article[]> {
    let url = `http://localhost/search/${term}`;
    return this.http.get<Article[]>(url);
  }

  updateArticle(article: Article): Observable<any> {
    let url = `http://localhost/article/edit/${article.id}`
    return this.http.put(url, article, this.httpOptions);
  }
}
