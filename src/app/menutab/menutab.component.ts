import { Component, OnInit } from '@angular/core';
import {BaseComponent } from '../psc_shared/psc_base.component';
@Component({
  selector: 'app-menutab',
  templateUrl: './menutab.component.html',
  styleUrls: ['./menutab.component.css']
})
export class MenutabComponent extends BaseComponent  {
  doctors = [];
  go(doctorid: number) {
    console.log(doctorid);
    
    this.router.navigate(['/txroom', doctorid]);
  }
  goPage(page: string) {
      page = '/'+page
   // console.log(doctorid);
    this.router.navigate([page]);
  }
  goFdname() { 
    this.router.navigate(['/fdname']);
  }
  ngOnInit() {
     let sql = { sql: "select * from doctor" };
     this._productService.getSql(sql).subscribe(resp => {
       this.doctors = resp;
     });
  }

}
