import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }   from './app.component';
import { RouterModule } from '@angular/router';
import { routerConfig } from './routerConfig.config';

// services
import { BlogService } from './services/blogs/blog.service';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';

import { AdvertisingComponent } from './products/advertising/advertising.component';
import { ConsultingComponent } from './products/consulting/consulting.component';
import { SocialmediaComponent } from './products/socialmedia/socialmedia.component';
import { WebdevelopmentComponent } from './products/webdevelopment/webdevelopment.component';


@NgModule({
  imports:      [ BrowserModule,
                  RouterModule.forRoot(routerConfig),
                  HttpModule],
providers:      [ BlogService ],
  declarations: [ AppComponent,
                  NavbarComponent,
                  HomeComponent,
                  AboutComponent,
                  ContactComponent,
                  BlogComponent,
                  FooterComponent,
                  AdvertisingComponent,
                  ConsultingComponent,
                  SocialmediaComponent,
                  WebdevelopmentComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
