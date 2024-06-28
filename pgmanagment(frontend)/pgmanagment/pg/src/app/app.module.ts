import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { TagsComponent } from './tags/tags.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { ImageSlideshowComponent } from './image-slideshow/image-slideshow.component';
import {  HttpClientModule } from '@angular/common/http';
import { ManagebookComponent } from './managebook/managebook.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoutComponent } from './logout/logout.component';
import { FooterComponent } from './footer/footer.component';
import { BookpageComponent } from './Bookpage/bookpage.component';
import { AddbookComponent } from './addBook/addbook.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


//import {RatingModule} from 'ng-starrating';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    CartpageComponent,
    AppComponent,
    BookpageComponent,
    AddbookComponent,
    LoginComponent,
    ImageSlideshowComponent,
    ManagebookComponent,
    CheckoutComponent,
    RegistrationComponent,
    NavbarComponent,
    LogoutComponent,
    FooterComponent,
    NotFoundComponent,
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    HttpClientModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
