import { Component, OnInit } from '@angular/core';
import { ElementRef } from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Dataservice } from '../../app/../shared/dataservice';
import { ProductService } from '../../..app/../service/server';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';

import { SelectItem } from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import {Message} from 'primeng/primeng';
import * as _ from "lodash";
import {FileUploadModule} from 'primeng/primeng';
@Component({
  selector: 'app-base-main',
  templateUrl: './base-main.component.html',
  styleUrls: ['./base-main.component.css']
})
export class BaseMainComponent implements OnInit {

  constructor(
    private _productService: ProductService, private route: ActivatedRoute,
        private router: Router, public _dt: Dataservice, private confirmationService: ConfirmationService
  ) {

  }
  model: any;
  models: any[];


 ind: number;
  displayDialog = false;
  doEditMain(p: any, i: number) {
    
      for (let prop in p) {
            this.model[prop] = p[prop];
        }
        this.ind = this.models.indexOf(p);
//console.log(this.model);
     //  console.log("ind="+this.ind);
       this.displayDialog = true;
   }
  ngOnInit() {
    
  }

}
