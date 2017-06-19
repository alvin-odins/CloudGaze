"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var router_1 = require("@angular/router");
// third party imports
var navbar_component_1 = require("./navbar/navbar.component");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var contact_component_1 = require("./contact/contact.component");
var blog_component_1 = require("./blog/blog.component");
var footer_component_1 = require("./footer/footer.component");
var advertising_component_1 = require("./services/advertising/advertising.component");
var consulting_component_1 = require("./services/consulting/consulting.component");
var socialmedia_component_1 = require("./services/socialmedia/socialmedia.component");
var webdevelopment_component_1 = require("./services/webdevelopment/webdevelopment.component");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'blog', component: blog_component_1.BlogComponent },
    { path: 'services/advertising', component: advertising_component_1.AdvertisingComponent },
    { path: 'services/consulting', component: consulting_component_1.ConsultingComponent },
    { path: 'services/socialmedia', component: socialmedia_component_1.SocialmediaComponent },
    { path: 'services/webdevelopment', component: webdevelopment_component_1.WebdevelopmentComponent }
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
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(appRoutes)],
        declarations: [app_component_1.AppComponent,
            navbar_component_1.NavbarComponent,
            home_component_1.HomeComponent,
            about_component_1.AboutComponent,
            contact_component_1.ContactComponent,
            blog_component_1.BlogComponent,
            footer_component_1.FooterComponent,
            advertising_component_1.AdvertisingComponent,
            consulting_component_1.ConsultingComponent,
            socialmedia_component_1.SocialmediaComponent,
            webdevelopment_component_1.WebdevelopmentComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map