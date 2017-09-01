import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../psc_shared/psc_base.component';
//declare var moment: any;
import * as moment from 'moment';
import * as _ from "lodash";
@Component({
  selector: 'app-txroom',
  templateUrl: './txroom.component.html',
  styleUrls: ['./txroom.component.css']
})
export class TxroomComponent extends BaseComponent {

  private sub: any;
  doctorid: number;
  tx: Tx;
  txs: any = [];
  displayDialog = false;
  pts: any = [];
  selectedTab: number;
  encodeHn() {
    
  }
  getHn(n1,n2) { 
    this.tx.hn = this._productService.getencodeHn(n1,n2);
    this.selectedTab = 1;
  }
  showDialogToAdd() {
    // this.newCar = true;
    let sql = { sql: "select * from tx " };
    this._productService.getSql(sql).subscribe(resp => {
      this.pts = resp;

      this.tx = new Tx();
      this.tx.doctorid = this.doctorid;
      this.tx.txdate = this.txdate;
      this.displayDialog = true;
    });
  }
  searchHn(str: string) {
    //console.log(hn);
    
    this.ptFilters = _.filter(this.pts, function (o) {
      let hn: string = o.hn;
      if (hn.includes(str)) { return o; }
 
    }); 
   }
  ptFilters: any = [];
  filterPt(txt: string) {
    console.log(txt);
    this.ptFilters = _.filter(this.pts, function (o) {
      let ptname: string = o.ptname;
      let ptsurname: string = o.ptname;
      let hn: string = o.hn;
      if (txt.charAt(0) <= '9' && txt.charAt(0) >= '0') {
        if (hn.includes(txt)) { return o; }

      } else {
        if (ptname.includes(txt) || ptsurname.includes(txt)) {
          return o;
        }
      }
      //  return !o.active;
    });
  }
  text1: string;
  test2: string;
  lastrows = [];
  getLastVisit() {
    let sql = { sql: "select * from tx where doctorid=" + this.doctorid + " order by txrowid desc limit 1" };
    this._productService.getSql(sql).subscribe(res => this.lastrows = res, err => {
      console.log('err');
    }, () => { });
  }
  save() {
    let ff = _.escape(this.testdata);
    this.txdate = this.tx.txdate;
console.log( this.txdate);
    let cc: any;
    this._productService.getAdd(this.tx, 'tx').subscribe(res => cc = res, err => {
      console.log('err');
    }, () => {
      let ss: any = { ptname: this.tx.ptname, ptsurname: this.tx.ptsurname, hn: this.tx.hn, doctorid: this.tx.doctorid }
      // ss = this.tx;
      // ss = Object.create(this.tx);
      // this.txs.push(ss);
      if (!this.tx.isspec) { this.tx.isspec = null }
      if (!this.tx.isgov) { this.tx.isgov = null }
     
      let ee: any = {
        hn: this.tx.hn,
        ptname: this.tx.ptname,
        ptsurname: this.tx.ptsurname,
        txdate: this.tx.txdate,
        txnamestr: this.tx.txnamestr,
        txprice: this.tx.txprice,
        doctorid: this.tx.doctorid,
        isspec: this.tx.isspec, isgov: this.tx.isgov,
        cashpay: 0,govpay: 0,doctorname:""
      };
      if (this.tx.isgov == "1") { ee.govpay = this.tx.txprice; ee.cashpay = 0; } else { 
        ee.cashpay = this.tx.txprice; ee.govpay = 0;
      }
      let dcid = this.tx.doctorid ;
      let dc = _.find(this.doctors, function (o) {
        if (o.value == dcid) { return o; }
      });
   ee.doctorname = dc.label;
      this.txs = [...this.txs, this.tx];
       this.txsDay = [...this.txsDay, ee];
      // this.txs.push(ss);
     
      //console.log(dcid =="1");
      
 
      this.displayDialog = false;
    });

  }
  mon = [6, 7, 8];
  testAc(m: number) {
    console.log("test" + m);

  }
  setPtname(pt: any) {
    this.tx.hn = pt.hn;
    this.tx.ptname = pt.ptname;
    this.tx.ptsurname = pt.ptsurname;
  }
  thday = new Array("อาทิตย์", "จันทร์",
    "อังคาร", "พุธ", "พฤหัส", "ศุกร์", "เสาร์");
  thmonth = new Array("มกราคม", "กุมภาพันธ์", "มีนาคม",
    "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน",
    "ตุลาคม", "พฤศจิกายน", "ธันวาคม");
  dateconv(d: string) {
    return moment(d).locale('th').format('D');
  }
  showSelectDate(d: any) {
    return moment(d).locale('th').format('ll');
  }
  dayconv(d: string) {
    return moment(d).locale('th').format('dddd');
  }
  setNow() {
    this.tx.txdate = moment().format('YYYY-MM-DD');
  }
  setTxnamestr(name) {
    this.tx.txnamestr = name;
  }
  txsDay: any = [];
  daypanels: any = [];
  doctors: any = [];
  txnamelist: any = [];
  txdate: any;
  sumcash: number;
  sumgov: number;
  txDay: any;
  evalbills: any;
  testdata: string;
  results: any = [];// string[];
  search(event) {
      console.log(event);
      
      let sql = { sql: `select * from tx limit 10` };

        this._productService.getSql(sql).subscribe( data => {
            this.results = data;
        });
    }
  doFilterDay(d: any) {
    this.txdate = d;
    this.txsDay = _.filter(this.txs, function (o) {
      return d == o.txdate;
    });
    let sql = {sql:`select * from evalbill where evalid in (select distinct evalid from evalbilldetail where doctorid =${this.doctorid})`
  };
//console.log(sql);

//let sql = { sql: `select * from evalbill where maindoctorid =${this.doctorid} and evaldate ='${this.txdate}' ` };
    this._productService.getSql(sql).subscribe(resp => {
        this.evalbills = resp;
      });
    
  }
  setName() { 
    let sql = { sql: "select * from tx order by txrowid desc limit 1" };
    this._productService.getSql(sql).subscribe(resp => {
     // let txlast = resp;
      this.tx.ptname = resp[0]['ptname'];
      this.tx.ptsurname = resp[0]['ptsurname'];
      this.tx.hn = resp[0]['hn'];
        this.tx.txdate = resp[0]['txdate'];
    });
  }
  txn: Tx;
  ngOnInit() {
    this.txn = new Tx();
    this.txn.ptname = "ff";
    this.txn.ptsurname = "rr";
    let sql = { sql: "select distinct txnamestr as name from tx order by txnamestr" };
    this._productService.getSql(sql).subscribe(resp => {
      this.txnamelist = resp;
    });
    sql = { sql: "select doctorname as label,doctorid as value from doctor" };
    this._productService.getSql(sql).subscribe(resp => {
      this.doctors = resp;
    });
    this.sub = this.route.params.subscribe(params => {
      this.doctorid = +params['doctorid']; // (+) converts string 'id' to a number
      let sql = { sql: "select t.*,d.doctorname,if(isgov =1 ,0,txprice) as cashpay ,if(isgov =1 ,txprice,0) as govpay from tx t , doctor d where t.doctorid=d.doctorid and t.doctorid=" + this.doctorid };
      this._productService.getSql(sql).subscribe(resp => {
        this.txs = resp;
      });
      let str = `select txdate,doctorid,count(*) as ptnum,coalesce(sum(txprice),0) as total,coalesce(sum(if(isgov=1,0,txprice)),0) as cash ,coalesce(sum(if(isgov=1,txprice,0)),0) as gov from tx where doctorid = ${this.doctorid} group by txdate order by txdate desc`;
      sql = { sql: str };
      this._productService.getSql(sql).subscribe(resp => {
        this.daypanels = resp;
      });

       });
  }
  ngOnDestroy() {
    //this.sub.unsubscribe();
  }
}
class Tx {
  hn: string;
  ptname: string;
  ptsurname: string;
  txnamestr: string;
  txdate: string;
  doctorid: number;
  txprice: number;
  isgov: string;
  isspec: string;
}