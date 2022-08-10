import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './component/home/home.component';
import { ArticleComponent } from './component/article/article.component';
import { AppComponent } from './app.component';
import { ArticleCategoryComponent } from './component/article-category/article-category.component';




@NgModule({

  declarations: [
    AppComponent,
    ArticleComponent,
    HomeComponent,
    ArticleCategoryComponent,
   ],
  imports: [
    BrowserModule,

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
