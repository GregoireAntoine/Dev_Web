import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './component/home/home.component';
import { ArticleComponent } from './component/article/article.component';
import { AppComponent } from './app.component';





@NgModule({

  declarations: [
    AppComponent,
    ArticleComponent,
    HomeComponent,
   ],
  imports: [
    BrowserModule,

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
