import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { RouterModule, Routes } from '@angular/router';

// third party imports

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';

import { AdvertisingComponent } from './services/advertising/advertising.component';
import { ConsultingComponent } from './services/consulting/consulting.component';
import { SocialmediaComponent } from './services/socialmedia/socialmedia.component';
import { WebdevelopmentComponent } from './services/webdevelopment/webdevelopment.component';

const appRoutes: Routes = [
  {path : '', component : HomeComponent },
  {path : 'about', component : AboutComponent },
  {path : 'contact', component : ContactComponent },
  {path : 'blog', component : BlogComponent },
  {path : 'services/advertising', component : AdvertisingComponent },
  {path : 'services/consulting', component : ConsultingComponent },
  {path : 'services/socialmedia', component : SocialmediaComponent },
  {path : 'services/webdevelopment', component : WebdevelopmentComponent }
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
                  RouterModule.forRoot(appRoutes)],
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
