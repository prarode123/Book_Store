import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-available-books',
  templateUrl: './available-books.component.html',
  styleUrls: ['./available-books.component.css']
})
export class AvailableBooksComponent {
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


}

