import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms'; 


import { HeaderComponent } from './header/header.component';
import { AvailableBooksComponent } from './available-books/available-books.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { TextComponent } from './text/text.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AddbookComponent } from './addbook/addbook.component';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { AdsucclogComponent } from './adsucclog/adsucclog.component';
import { UssucclogComponent } from './ussucclog/ussucclog.component';
import { BuybookComponent } from './buybook/buybook.component';
import { PaynowComponent } from './paynow/paynow.component';
import { PaycheckComponent } from './paycheck/paycheck.component';


import {HttpClientModule} from '@angular/common/http'
//import { AppComponent } from './app.component';
// import { FormsModule } from '@angular/forms';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { ViewregComponent } from './viewreg/viewreg.component';
import { AdminlogComponent } from './adminlog/adminlog.component';
//import { UpdatebookComponent } from './updatebook/updatebook.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    AvailableBooksComponent,
    AboutComponent,
    RegisterComponent,
    ContactComponent,
    HomeComponent,
    TextComponent,
    UserloginComponent,
    AddbookComponent,
    ViewbookComponent,
    AdsucclogComponent,
    UssucclogComponent,
    BuybookComponent,
    PaynowComponent,
    PaycheckComponent,
    UpdatebookComponent,
    ViewregComponent,
    AdminlogComponent,
    //UpdatebookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
