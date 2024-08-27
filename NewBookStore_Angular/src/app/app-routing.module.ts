import { NgModule, ViewRef } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AvailableBooksComponent } from './available-books/available-books.component';
import { HomeComponent } from './home/home.component';
import { TextComponent } from './text/text.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AddbookComponent } from './addbook/addbook.component';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { AdsucclogComponent } from './adsucclog/adsucclog.component';
import { UssucclogComponent } from './ussucclog/ussucclog.component';
import { BuybookComponent } from './buybook/buybook.component';
import { PaynowComponent } from './paynow/paynow.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { RegisterComponent } from './register/register.component';
import { ViewregComponent } from './viewreg/viewreg.component';
import { AdminlogComponent } from './adminlog/adminlog.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path: 'home', component: HomeComponent },
  {path: 'books', component:  AvailableBooksComponent},
  {path: 'login', component: LoginComponent },
  {path: 'about',component:AboutComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'userlogin', component:UserloginComponent},
  {path: 'addbook', component:AddbookComponent},
  {path: 'viewbook', component:ViewbookComponent},
  {path: 'adsucclog', component:AdsucclogComponent},
  {path: 'ussucclog', component:UssucclogComponent},
  {path: 'buybook', component:BuybookComponent},
  {path: 'paynow', component:PaynowComponent},
  {path: 'updatebook', component:UpdatebookComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'viewreg', component:ViewregComponent},
  {path: 'adminlog', component:AdminlogComponent}
  
  
  //  {path:'login',component:LoginComponent,
  //  children:[
  //   {path:'adminlog',component:AdminlogComponent},
  //   {path:'userlog',component:UserlogComponent}
  //  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
