"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var contact_component_1 = require("./contact/contact.component");
var blog_component_1 = require("./blog/blog.component");
var advertising_component_1 = require("./products/advertising/advertising.component");
var consulting_component_1 = require("./products/consulting/consulting.component");
var socialmedia_component_1 = require("./products/socialmedia/socialmedia.component");
var webdevelopment_component_1 = require("./products/webdevelopment/webdevelopment.component");
exports.routerConfig = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'blog', component: blog_component_1.BlogComponent },
    { path: 'products/advertising', component: advertising_component_1.AdvertisingComponent },
    { path: 'products/consulting', component: consulting_component_1.ConsultingComponent },
    { path: 'products/socialmedia', component: socialmedia_component_1.SocialmediaComponent },
    { path: 'products/webdevelopment', component: webdevelopment_component_1.WebdevelopmentComponent }
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
//# sourceMappingURL=routerConfig.config.js.map