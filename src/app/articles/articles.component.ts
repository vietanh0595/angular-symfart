import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';
import { Article } from '../article';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: Article[];
  getByCat: boolean;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
  ) { }
  catId = +this.route.snapshot.paramMap.get('id');
  searchTerm:string = this.route.snapshot.paramMap.get('term');


  ngOnInit(): void {
    if(this.catId){
      this.getArticleByCat(this.catId)
      this.getByCat = true;
    } else if(this.searchTerm){
      this.searchArticles(this.searchTerm)
      this.getByCat = false;
    }
    else {
      this.getAllArticles()
      this.getByCat = false;
    }
  }

  getArticleByCat(catId:number) {
    this.articleService.getArticlesByCat(catId)
      .subscribe(articles => this.articles = articles);
  }

  getAllArticles() {
    this.articleService.getAllArticles()
      .subscribe(articles => this.articles = articles);
  }

  searchArticles(searchTerm:string){
    this.articleService.searchArticles(searchTerm)
      .subscribe(articles => this.articles = articles);
  }

  add(title: string, body:string, catId:number): void {
    if (!title || !body) { return; }
    this.articleService.addArticle({ title, body } as Article, catId)
      .subscribe(article => {
        this.articles.push(article);
        // console.log(article);
      });
  }

  delete(article: Article): void {
    this.articles = this.articles.filter(a => a !== article);
    this.articleService.deleteArticle(article).subscribe(article => {
      console.log(article);
    });
  }


}
