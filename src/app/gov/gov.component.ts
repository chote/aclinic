
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from './../psc_shared/psc_base.component';
import * as moment from 'moment';
import * as _ from "lodash";
@Component({
  selector: 'app-gov',
  templateUrl: './gov.component.html',
  styleUrls: ['./gov.component.css']
})
export class GovComponent extends BaseComponent {

  govs: any = [];
  govDetails: any = [];
  getOk() {
    console.log("dd");
    
  }
  rr: any;
  det: any = [];
  handleRowExpand(e) {
    //console.log(e.data);
    this.rr = e.data;
    let id = e.data.evalid;
   // console.log(id);
    
    this.det = _.filter(this.govDetails, function (o) {
     // console.log(o.evalid + "==" + id);
      if (o.evalid == id) { return o; }
    }
    );
    
  //console.log(this.det);
  
  } 
  addNewEvalBill() {
   // console.log(e.evalid);
    this.action = "add"; 
    this.gov = new Gov();
    this.displayDialogGov = true;
    console.log(this.dictDoctor);
console.log(this.dictDoctor['d'+3]);
    

  }  
  action: string;
  govView: any;
  editBill(e:any) {
    console.log(e.evalid);
    this.action = "edit";
    this.gov = new Gov();
    this.govView = e;
    this.gov = _.clone(e);
    this.displayDialogGov = true;
  }  
  saveEvalBill() {
    if (this.action == "edit") {
      this.gov["updateId"] = " evalid ="+this.gov.evalid;
     }
       let cc: any;
    this._productService.getAdd(this.gov, 'evalbill').subscribe(res => cc = res, err => {
      console.log('err');
    }, () => {
      if (this.action == "add") {
        let id: number;
        this._productService.getLastId("evalbill", "evalid").subscribe(resp => {
          let lasts = resp;
          id = lasts[0]["lastid"];
          this.gov.evalid = +id;
        });
        this.govs = [... this.govs, this.gov];
      } else {
        let ss:number = _.findIndex(this.govs, { evalid: this.gov.evalid });

        this._productService.getCopyObj(this.gov, this.govs[ss]); 
     //   this.govs[ss] = this.gov;
     //  console.log(this.govs[ss]);
      // this.govs[ss]["totalprice"] = 222222;
        //this.govView = this.gov;
       // this.govs = null;
       }

      this.displayDialogGov = false;
    });

  }
  setDate(d) { 
    moment.locale('th');
    return   moment(d).format('ll');
  }
  saveDetail() {
       let cc: any;
    this._productService.getAdd(this.gd, 'evalbilldetail').subscribe(res => cc = res, err => {
      console.log('err');
    }, () => {
        this.govDetails = [... this.govDetails, this.gd];
 
      this.displayDialogGovDetail = false;
    });

  }
  setPtname(c) {
    console.log(c);
    this.gov.ptname = c.ptname;
    this.gov.hn = c.hn;
    this.gov.ptsurname = c.ptsurname;
     this.gov.evaldate = c.txdate;
   }

  deleteDetail() { }
 
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

  displayDialogGov = false;
   displayDialogGovDetail = false;
    showDialogToAddGov() {
    this.gov = new Gov();
    this.gov.maindoctorid = this.maindoctorid;
    this.displayDialogGov = true;
    }
    txname: string;
    setTxid(n:any) { 
      this.gd.txid = n.txid;
      this.txname = n.txname;
      this.gd.amount = 1;
      this.gd.price = n.txcost;
      this.gd.isspecial = n['d' + this.gd.doctorid];
        console.log('d' + this.gd.doctorid);
        
    }
    gov:Gov;
    gd:GovDetail;
    txid: number;
      showDialogToAddGovDetail(d) {
        this.gd = new GovDetail();
        this.gd.evalid = d.evalid;
    this.gd.doctorid = d.maindoctorid;
    this.gd.txid = this.txid; 
        
    this.displayDialogGovDetail = true;
  }
  doctors: any = [];
  doctorid: number;
  maindoctorid=0;
  txs: any = [];
  txnamelist: any = [];
  txstemp: any = [];
 
  dictDoctor = {};
  ngOnInit() {
    this._productService.genDoctor(this.dictDoctor);
    //this.dictDoctor

   //   console.log("this.dictDoctor"); 
   let sql = { sql: "select * from tx order by txdate" };
    this._productService.getSql(sql).subscribe(resp => {
      this.txs = resp;
      this.txstemp = _.clone(this.txs);
    //  this.txssearch = _.clone(this.txs);
    });
    this.gov = new Gov();
    this.gd = new GovDetail();
       sql = { sql: "select doctorname as label,doctorid as value from doctor" };
    this._productService.getSql(sql).subscribe(resp => {
      this.doctors = resp;
      this.doctors.unshift({label:"โปรดเลือกทันตแพทย์",value:0});
    });

sql = { sql: "select * from evalbill e ,doctor d where e.maindoctorid = d.doctorid order by evalid desc" };
    this._productService.getSql(sql).subscribe(resp => {
      this.govs = resp;
      console.log(this.govs);
      
    });
    sql = { sql: "select * from txcode" };
    this._productService.getSql(sql).subscribe(resp => {
      this.txnamelist = resp;
    });
      sql = { sql: "select * from  evalbilldetail e,evalbill b,doctor d,txcode t where e.evalid = b.evalid and e.doctorid = d.doctorid and e.txid = t.txid " };
    this._productService.getSql(sql).subscribe(resp => {
      this.govDetails = resp;
    });
  }

}
class Gov {
  evalid: number;
  hn: string;
  ptname: string;
  ptsurname: string;
  datereturn: string;
  datecheque: string;
  evaldate: string;
  evalcode: string;
  maindoctorid: number;
  totalprice: number;
}
class GovDetail {
  evalid: number;
  txid: number;
  doctorid: number;
  txprice: number;
   price: number;
  isspec: string; isspecial: string;
  amount:number
}