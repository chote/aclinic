import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../psc_shared/psc_base.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fdname',
  templateUrl: './fdname.component.html',
  styleUrls: ['./fdname.component.css']
})
export class FdnameComponent extends BaseComponent {
  dbname: string;
  table: string;
  obj: string;
  str: string="";
  getFd() { 
     //let sql = { sql: "select * from doctor" };
    this.dbname = "db_dentclinic";
    this.table = "tx";
    this.obj = "this.tx";
     this._productService.getFdname(this.dbname,this.table).subscribe(resp => {
       this.result = resp;
       this.result.forEach(v => {
         this.str+=v['COLUMN_NAME']+':'+this.obj+'.'+v['COLUMN_NAME']+',';
       });
     });
  }
  result: any = [];
  ngOnInit() {
     
  }

}
