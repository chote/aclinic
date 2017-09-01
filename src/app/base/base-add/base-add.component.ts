import { Component, OnInit } from '@angular/core';
import { ElementRef } from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Dataservice } from '../../app/../shared/dataservice';
import { ProductService } from '../../..app/../service/server';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';
@Component({
  selector: 'app-base-add',
  templateUrl: './base-add.component.html',
  styleUrls: ['./base-add.component.css']
})
export class BaseAddComponent implements OnInit {

  constructor(private _location:Location,private _productService: ProductService , private route: ActivatedRoute,
    private router: Router,public _dt:Dataservice) {

  }
onCancel(){
      // this.router.navigate(["main/mainproduct"]);
  }
 models:any=[];model:any=[];
  onSubmit(f: any) {
  }
  ngOnInit() {
  }

}
