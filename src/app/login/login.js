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
var core_1 = require("@angular/core");
var server_1 = require('../app/../service/server');
var dataservice_1 = require('../app/../shared/dataservice');
var LoginComponent = (function () {
    function LoginComponent(_productService, _dt) {
        this._productService = _productService;
        this._dt = _dt;
        this.lg = false;
        this.logged = new core_1.EventEmitter();
        this.isLogin = false;
    }
    LoginComponent.prototype.doLogin = function () {
        //
    };
    LoginComponent.prototype.doLogged = function () {
        var ev = { isLogin: dataservice_1.Dataservice.isLogin, dt: this._dt };
        this.logged.emit(ev);
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var loginvar;
        //   let logobj = {"username":this.username,"password":this.password};
        //let logobj = {"username":"10972","password":"p221"};
        var logobj = { "username": "10702", "password": "p242" };
        //let logobj = {"username":this.username,"password":this.password};
        this._productService.getLogin(logobj).subscribe(function (prods) { return dataservice_1.Dataservice.loguser = prods; }, function (err) { return console.log(err); }, function () {
            if (dataservice_1.Dataservice.loguser) {
                //   alert("Login สำเร็จเรียบร้อย");
                dataservice_1.Dataservice.isLogin = true;
                _this._dt.isLog = true;
                _this.isLogin = true;
                _this._dt.profile = dataservice_1.Dataservice.loguser;
                //   this._dt = Dataservice.loguser;
                //alert(  this._dt);
                console.log(dataservice_1.Dataservice.loguser);
            }
            else {
                alert("username หรือ รหัสผ่านไม่ถูกต้อง โปรดลองใหม่");
            }
            _this.username = "";
            _this.password = "";
            return false;
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], LoginComponent.prototype, "lg", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], LoginComponent.prototype, "logged", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: "login",
            templateUrl: "app/login/login.html"
        }), 
        __metadata('design:paramtypes', [server_1.ProductService, dataservice_1.Dataservice])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.js.map