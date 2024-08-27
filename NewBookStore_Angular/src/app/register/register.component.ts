import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private http:HttpClient)
  {
    let url=this.baseurl+'read2';
    this.http.get(url).subscribe((data:any)=>
    {
      this.list=data;
    });
  }

  baseurl="http://localhost:8080/";
  list:any[]=[];
  id:number=0;
  username:String='';
  email:String='';
  password: string = '';

  add1()
  {
    let url=this.baseurl+'add14'+this.id+'and'+this.username+'and'+this.email+'and'+this.password;
    this.http.get(url).subscribe((data:any)=>
    {
      this.list.push(data);
      this.id=0;
      this.username='';
      this.email='';
      this.password='';
    });
  }

  delete(obj:any)
  {
    let url=this.baseurl+'delete1'+obj.id;
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
