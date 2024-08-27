import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private http:HttpClient)
  {
    let url=this.baseurl+'read1';
    this.http.get(url).subscribe((data:any)=>
    {
      this.list=data;
    });
  }

  baseurl="http://localhost:8080/";
  list:any[]=[];
  id:number=0;
  name:String='';
  email:String='';
  msg:String='';

  add1()
  {
    let url=this.baseurl+'add13'+this.id+'and'+this.name+'and'+this.email+'and'+this.msg;
    this.http.get(url).subscribe((data:any)=>
    {
      this.list.push(data);
      this.id=0;
      this.name='';
      this.email='';
      this.msg='';
    });
  }
}
