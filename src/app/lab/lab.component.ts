import { Component, OnInit } from '@angular/core';

import { BaseComponent } from './../psc_shared/psc_base.component';
import * as moment from 'moment';
import * as _ from "lodash";
import $ from "jquery";
@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent extends  BaseComponent {
  labs: any = []; doctors: any = [];
  lab: Lab; 
  labstemp: any = [];
  labdts: any = [];
  det: any = [];
  rr: any;
  laboffices: any = [];
  displayDialogLab = false;

  handleRowExpand(e) {
    //console.log(e.data);
    this.rr = e.data;
    let id = e.data.labbillid;
   // console.log(id);
    
    this.det = _.filter(this.labdts, function (o) {
     // console.log(o.labid + "==" + id);
      if (o.labbillid == id) { return o; }
    }
    );
    
  //console.log(this.det);
  
  } 
 txssearch: any = [];  
 searchPtname(e) {
     console.log('e='+e);
    //console.log(e.target.innerHTML); 
    if (e && e.length > 1) {
   //  console.log(e);
      this.txssearch = _.filter(this.txs, (o) => {
        if (o.ptname.includes(e)) {
          return o;
        }
      });
      //console.log(e.originalEvent.target.innerText); 
    }
    
  }  
   showFilterDoctor(e) {
     //console.log(e.target.innerHTML); 
    console.log(e.value);
    let did:number = e.value;
  this.txstemp =  _.filter(this.txs, (o) => {
      if (o.doctorid == did) {
       return o;
       }
    });
       //console.log(e.originalEvent.target.innerText); 
   }
  action = "";  
  addNewLabBill() {
   // console.log(e.labid);
    this.action = "add"; 
    this.lab = new Lab();
    this.displayDialogLab = true;

  }  
  saveLabBill() {
    console.log(this.lab);
    
    if (this.action == "edit") {
      this.lab["updateId"] = " labbillid ="+this.lab.labbillid;
     }
       let cc: any;
    this._productService.getAdd(this.lab, 'labbill').subscribe(res => cc = res, err => {
      console.log('err');
    }, () => {
      if (this.action == "add") {
        let id: number;
        this._productService.getLastId("labbill", "labbillid").subscribe(resp => {
          let lasts = resp;
          id = lasts[0]["lastid"];
          this.lab.labbillid = +id;
          this.lab.doctorname = this.dDoctor['d' + this.lab.doctorid];
           this.lab.labofficename = this.dLaboffice['d'+this.lab.labofficeid];
        });
        this.labs = [... this.labs, this.lab];
      } else {
        let ss:number = _.findIndex(this.labs, { labid: this.lab.labbillid });

        this._productService.getCopyObj(this.lab, this.labs[ss]); 
   
       }

      this.displayDialogLab = false;
    });

  }
   setPtname(c) {
    console.log(c);
    this.lab.ptname = c.ptname;
    this.lab.hn = c.hn;
    this.lab.ptsurname = c.ptsurname;
  
   }
   setLabwork(c) {
     console.log(c);
     if (this.lab.labwork) {
       this.lab.labwork += " " + c.labworkname;
     }else{  this.lab.labwork= c.labworkname}
    this.lab.labwork.trim();
  
   }
   setDate(d) { 
    moment.locale('th');
    return   moment(d).format('ll');
   }
  
  txs: any = [];
  txstemp: any = [];
  dDoctor = {};dLaboffice = {};
  labworks:any = [];
  ngOnInit() {
    this._productService.genDoctor(this.dDoctor);
       this._productService.genLaboffice(this.dLaboffice);
     let sql = { sql: "select * from tx order by txdate" };
    this._productService.getSql(sql).subscribe(resp => {
      this.txs = resp;
      this.txstemp = _.clone(this.txs);
    });
    sql = { sql: "select * from labbill e ,doctor d,laboffice l where e.doctorid = d.doctorid and e.labofficeid = l.labofficeid order by labbillid desc" };
    this._productService.getSql(sql).subscribe(resp => {
      this.labs = resp;
      console.log(this.labs);
      
    });
    this.lab = new Lab();
  //  this.labdt = new LabDetail();
       sql = { sql: "select doctorname as label,doctorid as value from doctor" };
    this._productService.getSql(sql).subscribe(resp => {
      this.doctors = resp;
      this.doctors.unshift({label:"โปรดเลือกทันตแพทย์",value:0});
    });
  sql = { sql: "select labofficename as label,labofficeid as value from laboffice" };
    this._productService.getSql(sql).subscribe(resp => {
      this.laboffices = resp;
      this.laboffices.unshift({label:"โปรดเลือกบริษัทLab",value:0});
    });

    sql = { sql: "select * from labwork" };
     this._productService.getSql(sql).subscribe(resp => {
      this.labworks = resp;
     // console.log(this.labdts);
      
    });
  }

}
class Lab {
  labbillid: number;
  hn: string;
  ptname: string;
  ptsurname: string;
  labofficeid:number;
 labsenddate: string;
  appointmentdate: string;
  labreturndate: string;
  paydate: string;
 labprice: number;
 ispaid: string;
 labbillno: string;
 labwork: string;
 doctorid: number;
 doctorname: string; 
 labofficename: string; 
}

