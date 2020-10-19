import { Component, OnInit } from '@angular/core';
import { Article } from '../Article';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  article:Article;
  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getArticle();
  }

  getArticle(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.articleService.getArticle(id)
      .subscribe(article => this.article = article);
  }

  save(): void {
    this.articleService.updateArticle(this.article)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
