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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var dataservice_1 = require('../app/../shared/dataservice');
var _ = require("lodash");
//import 'rxjs/add/operator/map';
//import {Pis_test} from './model';
//import {Contacts} from './model';
//import * as myVar from '../shared/globals'; //<==== this one
var ProductService = (function () {
    function ProductService(_http, _dt) {
        this._http = _http;
        this._dt = _dt;
        this.token = "xx0";
        this.hcode = "10972";
        this.api = "http://dmfzero.com/api/amat/apis.php/";
        //this.token=this._dt.token;
    }
    ProductService.prototype.addData = function (tbl, pd) {
        var url = this.api + "post/" + tbl; //console.log(url);
        // pd['updateId']=" id=6021";
        var body = JSON.stringify(pd);
        //    console.log(body);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        //    let options = new RequestOptions({ headers: headers });
        return this._http.post(url, body, { headers: headers })
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.getLastId = function (tbl, id) {
        this.url = this.api + "lastid/" + tbl + "/" + id + "/" + this.token;
        return this._http.get(this.url) //this._productUrlOne)
            .map(function (response) { return response.json(); });
        // .catch(this.handleError)
    };
    ProductService.prototype.getDelete = function (st) {
        var url = this.api + "del/" + this.token; // console.log(url);
        var body = JSON.stringify(st);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        return this._http.post(url, body, { headers: headers });
    };
    ProductService.prototype.getSql = function (st) {
        {
            var url = this.api + "postrows"; // console.log(url);
            //st['updateId']=" mid="+st['mid'] +' and hcode=' +st['hcode']  ;
            var body = JSON.stringify(st);
            // console.log(body);
            var headers = new http_1.Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            //    let options = new RequestOptions({ headers: headers });
            return this._http.post(url, body, { headers: headers })
                .map(function (response) { return response.json(); });
        }
    };
    ProductService.prototype.getDeleteRpstSubstock = function (mid) {
        var url = this.api + "deleteRpstSubstock/" + mid + "/" + this.token; //  console.log(url);
        return this._http.get(url).map(function (response) { return response.json(); });
    };
    ProductService.prototype.getUpdateStock = function (soid, mid, numnow, numstockout) {
        var url = this.api + "updatestock/" + soid + "/" + mid + "/" + numnow + "/" + numstockout + "/" + this.token; //  console.log(url);
        return this._http.get(url).map(function (response) { return response.json(); });
    };
    ProductService.prototype.getUpdateMainproduct = function (mid, numinstock) {
        var url = this.api + "updaterpstproductlist/" + mid + "/" + this.token; //  console.log(url);
        return this._http.get(url).map(function (response) { return response.json(); });
    };
    ProductService.prototype.getUpdateRpstProductList = function (cupcode) {
        var url = this.api + "updaterpstproductlist/" + cupcode + "/" + this.token;
        console.log(url);
        return this._http.get(url).map(function (response) { return response.json(); });
    };
    ProductService.prototype.getAdd = function (st, tbl) {
        {
            var url = this.api + "post/" + tbl + "/" + this.token; // console.log(url);
            //st['updateId']=" mid="+st['mid'] +' and hcode=' +st['hcode']  ;
            var body = JSON.stringify(st);
            //    console.log(body);
            var headers = new http_1.Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            //    let options = new RequestOptions({ headers: headers });
            return this._http.post(url, body, { headers: headers })
                .map(function (response) { return response.json(); });
        }
    };
    ProductService.prototype.getAddLastId = function (st, tbl, id) {
        {
            var url = this.api + "postlastid/" + tbl + "/" + id + "/" + this.token; // console.log(url);
            //st['updateId']=" mid="+st['mid'] +' and hcode=' +st['hcode']  ;
            var body = JSON.stringify(st);
            // console.log(body);
            var headers = new http_1.Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            //    let options = new RequestOptions({ headers: headers });
            return this._http.post(url, body, { headers: headers })
                .map(function (response) { return response.json(); });
        }
    };
    ProductService.prototype.getDeleteSoAndUpdateLot2begin = function (soid) {
        var url = this.api + "deletesoandupdatelot2begin/" + soid + "/" + this.token; // console.log(url);
        return this._http.get(url) //this._productUrlOne)
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.getUpdateSubStocknum = function (mid, hcode, oldnum, newnum) {
        var url = this.api + "updatesubstocknum/" + mid + "/" + hcode + "/" + oldnum + "/" + newnum + "/" + this.token;
        console.log(url);
        return this._http.get(url) //this._productUrlOne)
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.getCkregist = function (hcode) {
        var url = this.api + "ckregist/" + hcode + "/" + this.token; //console.log(url);
        return this._http.get(url).map(function (response) { return response.json(); });
    };
    ProductService.prototype.getLogin = function (st) {
        {
            var url = this.api + "/login"; // console.log(url);
            //st['updateId']=" mid="+st['mid'] +' and hcode=' +st['hcode']  ;
            var body = JSON.stringify(st);
            var headers = new http_1.Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            //    let options = new RequestOptions({ headers: headers });
            return this._http.post(url, body, { headers: headers })
                .map(function (response) { return response.json(); });
        }
    };
    ProductService.prototype.getSaveStock = function (st) {
        {
            _.forEach(st, function (v) {
                //console.log(value);
                if (v.numinstock == null) {
                    v.numinstock = 0;
                }
            });
            var url = this.api + "postsubstock/" + this.token; //  console.log(url);
            //st['updateId']=" mid="+st['mid'] +' and hcode=' +st['hcode']  ;
            var body = JSON.stringify(st);
            //console.log(body);
            var headers = new http_1.Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            //    let options = new RequestOptions({ headers: headers });
            return this._http.post(url, body, { headers: headers })
                .map(function (response) { return response.json(); });
        }
    };
    ProductService.prototype.getRpstList = function () {
        this.url = this.api + "rpstlist/" + this.hcode + "/" + this.token;
        console.log(this.url);
        return this._http.get(this.url) //this._productUrlOne)
            .map(function (response) { return response.json(); });
        // .catch(this.handleError)
    };
    ProductService.prototype.getProductList = function (hcode) {
        this.url = this.api + "productlist/" + this.hcode + "/" + this.token;
        return this._http.get(this.url) //this._productUrlOne)
            .map(function (response) { return response.json(); });
        // .catch(this.handleError)
    };
    ProductService.prototype.getUserList = function (hcode) {
        this.url = this.api + "userlist/" + this.hcode + "/" + this.token;
        return this._http.get(this.url) //this._productUrlOne)
            .map(function (response) { return response.json(); });
        // .catch(this.handleError)
    };
    ProductService.prototype.getRpstOrder = function (hcode) {
        this.url = this.api + "rpstorder/" + hcode + "/" + this.token;
        console.log(this.url);
        return this._http.get(this.url) //this._productUrlOne)
            .map(function (response) { return response.json(); });
        // .catch(this.handleError)
    };
    ProductService.prototype.getRpstStock = function (hcode) {
        this.url = this.api + "rpststock/" + hcode + "/" + this.token;
        console.log(this.url);
        return this._http.get(this.url) //this._productUrlOne)
            .map(function (response) { return response.json(); });
        // .catch(this.handleError)
    };
    ProductService.prototype.getpvContacts = function (khet) {
        var url = this.api + "pvcontactlist/" + khet;
        var url0 = this.api + "pvcontactlist/0";
        this._http.get(url0);
        return this._http.get(url) //this._productUrlOne)
            .map(function (response) { return response.json(); });
        // .catch(this.handleError)
    };
    ProductService.prototype.getCommitee = function () {
        var url = this.api + "pvcommiteelist";
        return this._http.get(url) //this._productUrlOne)
            .map(function (response) { return response.json(); });
        // .catch(this.handleError)
    };
    ProductService.prototype.getpvContact = function (id) {
        var url0 = this.api + "pvcontact/0";
        var url = this.api + "pvcontact/" + id;
        this._http.get(url0);
        return this._http.get(url) //this._productUrlOne)
            .map(function (response) { return response.json(); });
        // .catch(this.handleError)
    };
    ProductService.prototype.getpvContactdetail = function (id) {
        var url0 = this.api + "pvcontactdetail/0";
        var url = this.api + "pvcontactdetail/" + id;
        this._http.get(url0);
        return this._http.get(url)
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.fnGetnow = function (ymd, dot) {
        if (ymd === void 0) { ymd = true; }
        if (dot === void 0) { dot = "-"; }
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var now = "";
        var mmm = mm.toString();
        var ddd = dd.toString();
        var yyyy = today.getFullYear();
        if (dd < 10) {
            ddd = '0' + dd;
        }
        if (mm < 10) {
            mmm = '0' + mm;
        }
        if (ymd) {
            now = yyyy + dot + mmm + dot + ddd;
        }
        else {
            now = ddd + dot + mmm + dot + yyyy;
        }
        return now;
    };
    ProductService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, dataservice_1.Dataservice])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=server.js.map