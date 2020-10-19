import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';



const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'category/:id', component: ArticlesComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'detail/:id', component: ArticleDetailComponent },
  { path: 'search/:term', component: ArticlesComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
