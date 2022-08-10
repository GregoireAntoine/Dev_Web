import { Component, OnInit } from '@angular/core';
import { Observable, subscribeOn } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})


export class ArticleComponent implements OnInit {

  product:any;
  category:any;
  compteur: any[]  = [];
  quantity_number: any[]  = [];
  selectedOption : number =1;
  api_link : string='http://127.0.0.1:8000/api';

  nmbr_article(){
    var nombre=0;
    while(nombre<51){
      this.compteur[nombre]=nombre
      nombre=nombre+1
    }
  }
  counter(i: number) {
    return new Array(i);
}
  constructor(private http:HttpClient ) {

  }


  ngOnInit(): void {

    const httpOptions = {

      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('gregoire:antoine21')
      })
    };
    this.http.get('http://127.0.0.1:8000/api/product',httpOptions)
    .subscribe(Response => {
      this.product=Response;
      this.quantity_number= new Array(50)

    });

    this.http.get('http://127.0.0.1:8000/api/productcategory',httpOptions)
    .subscribe(Response => {
      this.category=Response;

    });

  }
  filter_product(category : any){
    console.log(category)
    sessionStorage.setItem('category', category);
  }

  getData(){
    return sessionStorage.getItem('category');
  }
}
