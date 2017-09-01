import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Dataservice} from '../app/../shared/dataservice';
import * as _ from "lodash";
//import 'rxjs/add/operator/map';
//import {Pis_test} from './model';
//import {Contacts} from './model';
//import * as myVar from '../shared/globals'; //<==== this one
@Injectable()
export class ProductService {
    opts: RequestOptions;
    product: any;
    token="xx0";
hcode="10972";
    constructor(private _http: Http,public _dt:Dataservice) {
//this.token=this._dt.token;
    }
    api: string="http://dmfzero.com/api/aclinic/apis.php/";
 addData(tbl:string,pd:any): Observable<any> {
      let url= this.api+"post/"+tbl;    //console.log(url);
     // pd['updateId']=" id=6021";
        let body = JSON.stringify(pd);
    //    console.log(body);
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    //    let options = new RequestOptions({ headers: headers });
        return this._http.post(url, body, { headers: headers })
           // .map(res => { console.log(res.json()) })
           .map((response: Response) => response.json()) 
    }


url:string;
    getLastId(tbl:any,id:any): Observable<any> {
        this.url= this.api+"lastid/"+tbl+"/"+id+"/"+this.token;
 return this._http.get(this.url)//this._productUrlOne)
            .map((response: Response) => response.json())
           // .catch(this.handleError)
    }
    getDelete(st:any){
  let url= this.api+"del/"+this.token;   // console.log(url);
   let body = JSON.stringify(st);
     let headers = new Headers();
     headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
       return this._http.post(url, body, { headers: headers })

    }
        getDeleteStockin(st:any){
  let url= this.api+"delstockin/"+this.token;  
  console.log(url);
    console.log(st);
        console.log('st');
   let body = JSON.stringify(st);
     let headers = new Headers();
     headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
       return this._http.post(url, body, { headers: headers })

    }
    getSqlKey(st:any): Observable<any> {

      let url= this.api+"postrows";  // console.log(url);
     //st['updateId']=" mid="+st['mid'] +' and hcode=' +st['hcode']  ;
        let body = JSON.stringify(st);
     // console.log(body);
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    //    let options = new RequestOptions({ headers: headers });
        return this._http.post(url, body, { headers: headers })
           // .map(res => { console.log(res.json()) })
           .map((response: Response) => response.json()) 
    }
    getHdcReport() {
       //   let url= this.api+"postrows";  // console.log(url);
     //st['updateId']=" mid="+st['mid'] +' and hcode=' +st['hcode']  ;
     //   let body = JSON.stringify(st);
     // console.log(body);
        let headers = new Headers();
         headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Methods', 'GET');
        headers.append('Access-Control-Allow-Origin', '*');
      //  headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        let url = "http://203.157.102.136/hdc/includes/jsonAction.php?nextList=hospcode&amphurID=3606&tambonID=&_=1490245740103 ";

    // let url= this.api+"deleteRpstSubstock/"+mid+"/"+this.token;  //  console.log(url);
     return this._http.get(url, {headers: headers}).map((response: Response) => response.json())
} 
 
getSql(st:any): Observable<any> {
{
      let url= this.api+"postrows";  // console.log(url);
     //st['updateId']=" mid="+st['mid'] +' and hcode=' +st['hcode']  ;
        let body = JSON.stringify(st);
     // console.log(body);
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    //    let options = new RequestOptions({ headers: headers });
        return this._http.post(url, body, { headers: headers })
           // .map(res => { console.log(res.json()) })
           .map((response: Response) => response.json()) 
    }
}
getHdc(){
     let url= this.api+"hdc";  //  console.log(url);
     return this._http.get(url).map((response: Response) => response.json())
}    
getDeleteRpstSubstock(mid:number){
     let url= this.api+"deleteRpstSubstock/"+mid+"/"+this.token;  //  console.log(url);
     return this._http.get(url).map((response: Response) => response.json())
}
getUpdateStock(soid:number,mid:number,numnow:number,numstockout:number,stockvalue:number){
     let url= this.api+"updatestock/"+soid+"/"+mid+"/"+numnow+"/"+numstockout+"/"+stockvalue+"/"+this.token;    console.log(url);
     return this._http.get(url).map((response: Response) => response.json())
}
getUpdateMainproduct(mid:number,numinstock:number){
     let url= this.api+"updaterpstproductlist/"+mid+"/"+this.token;  //  console.log(url);
     return this._http.get(url).map((response: Response) => response.json())
}
getUpdateRpstProductList(cupcode:string){
     let url= this.api+"updaterpstproductlist/"+cupcode+"/"+this.token;    console.log(url);
     return this._http.get(url).map((response: Response) => response.json())
}
getAdd(st:any,tbl:any): Observable<any> {
{
      let url= this.api+"post/"+tbl+"/"+this.token;   // console.log(url);
     //st['updateId']=" mid="+st['mid'] +' and hcode=' +st['hcode']  ;
        let body = JSON.stringify(st);
  //console.log(body);
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    //    let options = new RequestOptions({ headers: headers });
        return this._http.post(url, body, { headers: headers })
           // .map(res => { console.log(res.json()) })
           .map((response: Response) => response.json()) 
    }
}
getAddLastId(st:any,tbl:any,id:any): Observable<any> {
{
      let url= this.api+"postlastid/"+tbl+"/"+id+"/"+this.token;   // console.log(url);
     //st['updateId']=" mid="+st['mid'] +' and hcode=' +st['hcode']  ;
        let body = JSON.stringify(st);
     // console.log(body);
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    //    let options = new RequestOptions({ headers: headers });
        return this._http.post(url, body, { headers: headers })
           // .map(res => { console.log(res.json()) })
           .map((response: Response) => response.json()) 
    }
}
getLastSoid(soid: number, mid: number) {
        
    let url= this.api+"getLastSoid/"+soid+"/"+mid+"/"+this.token;  console.log(url);
 return this._http.get(url)//this._productUrlOne)
            .map((response: Response) => response.json())
     }
getDeleteSoAndUpdateLot2begin(soid:number){
 let url= this.api+"deletesoandupdatelot2begin/"+soid+"/"+this.token;  // console.log(url);
 return this._http.get(url)//this._productUrlOne)
            .map((response: Response) => response.json())
}
getUpdateSubStocknum(mid:number,hcode:string,oldnum:number,newnum:number){
      let url= this.api+"updatesubstocknum/"+mid+"/"+hcode +"/"+oldnum+"/"+newnum+"/"+this.token;  //  console.log(url);
 return this._http.get(url)//this._productUrlOne)
            .map((response: Response) => response.json())

}
getCkregist(hcode:string){
      let url= this.api+"ckregist/"+hcode +"/"+this.token;    //console.log(url);
 return this._http.get(url).map((response: Response) => response.json())

}
getLogin(st:any): Observable<any> {
{
      let url= this.api+"/login";   // console.log(url);
     //st['updateId']=" mid="+st['mid'] +' and hcode=' +st['hcode']  ;
        let body = JSON.stringify(st);
      
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    //    let options = new RequestOptions({ headers: headers });
        return this._http.post(url, body, { headers: headers })
           // .map(res => { console.log(res.json()) })
           .map((response: Response) => response.json()) 
    }
}
getSaveStock(st:any): Observable<any> {
{

    _.forEach(st, function(v) {
  //console.log(value);
  if(v.numinstock == null ){v.numinstock =0;
     // console.log(v.numinstock);
    }
});
      let url= this.api+"postsubstock/"+this.token;  //  console.log(url);
     //st['updateId']=" mid="+st['mid'] +' and hcode=' +st['hcode']  ;
        let body = JSON.stringify(st);
       //console.log(body);
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    //    let options = new RequestOptions({ headers: headers });
        return this._http.post(url, body, { headers: headers })
           // .map(res => { console.log(res.json()) })
           .map((response: Response) => response.json()) 
    }
}
    getRpstList(): Observable<any> {
        this.url= this.api+"rpstlist/"+this.hcode+"/"+this.token;
   //     console.log(this.url);
 return this._http.get(this.url)//this._productUrlOne)
            .map((response: Response) => response.json())
           // .catch(this.handleError)
    }
  getProductList(hcode:string): Observable<any> {
      this.url= this.api+"productlist/"+this.hcode+"/"+this.token;
 return this._http.get(this.url)//this._productUrlOne)
            .map((response: Response) => response.json())
           // .catch(this.handleError)
    }
      getUserList(hcode:string): Observable<any> {
      this.url= this.api+"userlist/"+this.hcode+"/"+this.token;
 return this._http.get(this.url)//this._productUrlOne)
            .map((response: Response) => response.json())
           // .catch(this.handleError)
    }

getRpstOrder(hcode:string): Observable<any> {
      this.url= this.api+"rpstorder/"+hcode+"/"+this.token;
  //    console.log(this.url);
 return this._http.get(this.url)//this._productUrlOne)
            .map((response: Response) => response.json())
           // .catch(this.handleError)
    }
getRpstStock(hcode:string): Observable<any> {
      this.url= this.api+"rpststock/"+hcode+"/"+this.token;
 //     console.log(this.url);
 return this._http.get(this.url)//this._productUrlOne)
            .map((response: Response) => response.json())
           // .catch(this.handleError)
    }
    getpvContacts(khet:number): Observable<any> {
let url= this.api+"pvcontactlist/"+khet;
let url0= this.api+"pvcontactlist/0";
this._http.get(url0);
        return this._http.get(url)//this._productUrlOne)
            .map((response: Response) => response.json())
           // .catch(this.handleError)
    }
    getCommitee(): Observable<any> {

let url= this.api+"pvcommiteelist";
        return this._http.get(url)//this._productUrlOne)
            .map((response: Response) => response.json())
           // .catch(this.handleError)
    }
     getpvContact(id:number): Observable<any> {
         let url0= this.api+"pvcontact/0";
let url= this.api+"pvcontact/"+id;
this._http.get(url0);

        return this._http.get(url)//this._productUrlOne)
            .map((response: Response) => response.json())
           // .catch(this.handleError)
    }
      getpvContactdetail(id:number): Observable<any> {
    let url0= this.api+"pvcontactdetail/0";      
let url= this.api+"pvcontactdetail/"+id;
this._http.get(url0);
 return this._http.get(url)
            .map((response: Response) => response.json())
          
    }
fnGetnow(ymd=true,dot="-"){
var today = new Date();
let dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
let now="";
let mmm=mm.toString();let ddd = dd.toString();
var yyyy = today.getFullYear();
if(dd<10){
    ddd='0'+ dd;
} 
if(mm<10){
    mmm='0'+mm;
} 
if(ymd){now= yyyy+dot+mmm+dot+ddd;}else{
now= ddd+dot+mmm+dot+yyyy;
}
return now;

}
}