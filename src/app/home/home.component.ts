import { Component, OnInit } from '@angular/core';
//import { SebmGoogleMap, SebmGoogleMapPolygon, LatLngLiteral } from 'angular2-google-maps/core';
//import { Dataservice } from '../app/../shared/dataservice';
//import { ProductService } from '../app/../service/server';
import { Hoslatlon } from '../app/../service/model';
import {BaseComponent } from '../psc_shared/psc_base.component';
import * as _ from "lodash";
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],

})
 
export class HomeComponent extends BaseComponent {
title: string = 'My first angular2-google-maps project';
  lat: number=15.806572074;//51.678418; //
  lng: number = 102.02900256;//7.809007;//
  center = { lat: 15.806572074, lng: 102.02900256 };  
  data: any;
  hospoints: Hoslatlon[];

  
    
  txcodes: any[]; 
  boxes = [];  
  tx = new Tx();  
  save() {
//      let sbox = _.filter(this.price) //_.filter(this.boxes, function (o) { return o.price > 0; }); 
 //  console.log(sbox);
      let i = -1;
      this.price.forEach(v => { 
          i++;
          console.log("i="+i);
          
          if (v > 0) { 
              this.tx.txid = this.boxes[i].txid;
              this.tx.price = v;
              this.tx.amount = this.amount[i];

              console.log(this.tx);
          }

      });    
  } box2 = [];
  price = [];
  amount = [];  
    evaldetails = [];    
  ngOnInit() {
      let sql = { sql: "select * from txcode" };
      this._productService.getSql(sql).subscribe(resproducts => this.txcodes = resproducts,
          err => { console.log(err) }, () => {
              for (var i = 0; i < this.txcodes.length; i++) {
                  this.tx = { txid: +this.txcodes[i]['txid'], txname: this.txcodes[i]['txname'], amount:i*5, price:0 }
     
                  this.boxes.push(this.tx);
             // console.log(this.boxes);
                  this.price[i]= 0;
                   this.amount[i]=0;
              }
            //  this.box2 = this.boxes);
      let sql = { sql: "select * from evalbilldetail" };
      this._productService.getSql(sql).subscribe(resp =>
      {
      this.evaldetails = resp,
          console.log(this.evaldetails);
      let x = 0;     
        
     this.evaldetails.forEach(v => { 
       //   x = this.boxes.indexOf({ txid:1});
         // console.log(x);
        //  let y = _.indexOf(this.boxes, { txid: 1 });
         x = this.boxes.findIndex(i => i.txid == v.txid);
      // console.log(x);
          this.price[x] = +v.price;
          this.amount[x] = +v.amount;
     //   this.boxes[x]['price'] = v.price;
     //  this.boxes[x]['amount'] = v.amount;
     });
console.log(this.price);
      
     }
    );      

          }
      )
  };

}
class Tx{ 
    txid: number;
    amount: number;
    price: number;
    txname: string;
}   