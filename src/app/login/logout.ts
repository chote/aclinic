import {Component, Output, EventEmitter, Input} from "@angular/core";    
import {ProductService} from '../app/../service/server';
import {Dataservice} from '../app/../shared/dataservice';
 
@Component({
    selector: "logout",
    templateUrl: "logout.html"
})
export class LogoutComponent {
    constructor(private _productService: ProductService,public _dt:Dataservice) {
    }
    
}
