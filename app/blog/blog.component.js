"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var blog_service_1 = require("../services/blogs/blog.service");
var BlogComponent = (function () {
    function BlogComponent(_blogService) {
        this._blogService = _blogService;
        // blogs: IBlog[];
        this.blogs = [];
    }
    BlogComponent.prototype.ngOnInit = function () {
        this.getBlogs();
    };
    BlogComponent.prototype.getBlogs = function () {
        var _this = this;
        this._blogService.getBlogs()
            .subscribe(function (blogs) { return _this.blogs = blogs; }, function (error) { return _this.errorMessage = error; });
    };
    return BlogComponent;
}());
BlogComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'blog.component.html',
        styleUrls: ['blog.css']
    }),
    __metadata("design:paramtypes", [blog_service_1.BlogService])
], BlogComponent);
exports.BlogComponent = BlogComponent;
//# sourceMappingURL=blog.component.js.map