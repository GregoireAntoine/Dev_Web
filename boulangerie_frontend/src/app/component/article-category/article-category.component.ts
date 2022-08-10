import { Component, OnInit } from '@angular/core';
import { Observable, subscribeOn } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-category',
  templateUrl: './article-category.component.html',
  styleUrls: ['./article-category.component.scss']
})
export class ArticleCategoryComponent implements OnInit {
  product:any;
  product2:any[]  = [];
  category:any;
  products: any[]  = [];
  compteur: any[]  = [];
  quantity_number: any[]  = [];
  selectedOption : number =1;
  api_link : string='http://127.0.0.1:8000/api';
  productdata : string=''
  a:any;
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
      this.product2=[]
      for (let compteur in Response){

        if (this.product[compteur].product_category_id == this.getData()){
          this.product2.push(this.product[compteur])

        }
      }



      this.quantity_number= new Array(50)
    });

    this.http.get('http://127.0.0.1:8000/api/productcategory',httpOptions)
    .subscribe(Response => {
      this.category=Response;
    });

  }


  filter_product(category : any){

    sessionStorage.setItem('category', category);
    this.ngOnInit();
  }
  getData(){
    return sessionStorage.getItem('category');
  }
}
