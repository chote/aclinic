import {Injectable} from '@angular/core';
@Injectable()
export class Dataservice{
public hos:any;
public cup:any;
public profile:any;
public userhos=[{"userid":1,"username":"ee","hcode":"30972"},
{"userid":2,"username":"ss","hcode":"30972"},{"userid":3,"username":"zz","hcode":"230972"}
];
//public userprovide:any;
public productlist:any;
public static loguser:any;
public static isLogin=false;
public isLog = false;
public isSide=true;
public contentmin="col-sm-8";
public contentmax="col-sm-12";
public contentcol="col-sm-8";
public token:string;
setup(){
this.hos=[];
this.cup=[];
this.userhos=[];
Dataservice.loguser=false;
Dataservice.isLogin=false;
this.isLog=false;
this.token="";


}
public static getNowMsql(){
  return  (new Date ((new Date((new Date(new Date())).toISOString() )).getTime() - ((new Date()).getTimezoneOffset()*60000))).toISOString().slice(0, 19).replace('T', ' ');
}
}
