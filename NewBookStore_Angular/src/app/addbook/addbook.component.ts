import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import { Route,Router } from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {
  // list: any;
  constructor(private http:HttpClient)
  {
    let url=this.baseurl+'read';
    this.http.get(url).subscribe((data:any)=>
    {
      this.list=data;
    });
  }

  baseurl="http://localhost:8080/";
  list:any[]=[];
  id:number=0;
  code:number=0;
  name:String='';
  author:String='';
  price:number=0;
  qnt:number=0;

  add1()
  {
    let url=this.baseurl+'add12'+this.id+'and'+this.code+'and'+this.name+'and'+this.author+'and'+this.price+'and'+this.qnt;
    this.http.get(url).subscribe((data:any)=>
    {
      this.list.push(data);
      this.id=0;
      this.code=0;
      this.name='';
      this.author='';
      this.price=0;
      this.qnt=0;
    });
  }
  delete(obj:any)
  {
    let url=this.baseurl+'delete'+obj.id;
    this.http.get(url).subscribe((data:any)=>
    {
    if(data==true)
    {
     let index=this.list.indexOf(obj);
     this.list.splice(index,1);
    }
    else{
      window.alert('Something is wrong');
    }
    });
  }

}
