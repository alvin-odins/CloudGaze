import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }   from './app.component';
import { RouterModule, Routes } from '@angular/router';

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

const appRoutes: Routes = [
  {path : '', component : HomeComponent },
  {path : 'about', component : AboutComponent },
  {path : 'contact', component : ContactComponent },
  {path : 'blog', component : BlogComponent },
  {path : 'products/advertising', component : AdvertisingComponent },
  {path : 'products/consulting', component : ConsultingComponent },
  {path : 'products/socialmedia', component : SocialmediaComponent },
  {path : 'products/webdevelopment', component : WebdevelopmentComponent }
  // {
  //   path : 'services',
  //   children: [
  //     {
  //       path: '/services/advertising', component: AdvertisingComponent
  //     },
  //     {
  //       path: '/services/consulting', component: ConsultingComponent
  //     },
  //     {
  //       path: '/services/socialmedia', component: SocialmediaComponent
  //     },
  //     {
  //       path: '/services/webdevelopment', component: WebdevelopmentComponent
  //     }
  //   ]
  // }
]

@NgModule({
  imports:      [ BrowserModule,
                  RouterModule.forRoot(appRoutes),
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
