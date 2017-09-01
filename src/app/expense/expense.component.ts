import { Component, OnInit } from '@angular/core';
import { BaseComponent } from './../psc_shared/psc_base.component';
import * as moment from 'moment';
import * as _ from "lodash";
@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent extends BaseComponent {
  expense=new Expense();
  expenses: any = [];
  action: string;
  getAddNew() {
    this.action = "add";
    this.saveExpense();
  }
    getEdit() {
    this.action = "edit";
    this.saveExpense();
   }
  saveExpense() {
     if (this.action == "edit") {
      this.expense["updateId"] = " expid ="+this.expense.expid;
     }
       let cc: any;
      console.log(this.action);
      
       this._productService.getAdd(this.expense, 'expense').subscribe(res => cc = res, err => {
         console.log('err');
       }, () => {
         if (this.action == "add") {
           let id: number;
           this._productService.getLastId("expense", "expid").subscribe(resp => {
             let lasts = resp;
             id = lasts[0]["lastid"]; 
             this.expense.expid = +id;
             console.log(this.expense );
             
             this.expenses = [... this.expenses, this.expense];
             console.log(this.expenses);
             this.expense = new Expense();
           });
         }
      
    
         });
    }
  ngOnInit() {
     let sql = { sql: "select * from expense order by expdate" };
    this._productService.getSql(sql).subscribe(resp => {
      this.expenses = resp;
    });
  }

}
class Expense {
  expid: number;
 expname: string;
 expdate:string;
  expcost: number;
  expmonth: string;
 
}