import {Component, Output, EventEmitter, Input} from "@angular/core";    
import {ProductService} from '../app/../service/server';
import {Dataservice} from '../app/../shared/dataservice';
 
@Component({
    selector: "login",
    templateUrl: "login.html"
})
export class LoginComponent {
    constructor(private _productService: ProductService,public _dt:Dataservice) {
    }
     @Input() lg: boolean = false;
@Output() logged= new EventEmitter();
isLogin=false;

    username:string;
    password:string;
    doLogin(){
        //
    }
    doLogged(){
         let ev  ={isLogin:Dataservice.isLogin,dt:this._dt}
this.logged.emit(ev);

    }
    onSubmit(){
        let loginvar:any;
     //   let logobj = {"username":this.username,"password":this.password};

 //let logobj = {"username":"10972","password":"p221"};
  let logobj = {"username":"10702","password":"p242"};
//let logobj = {"username":this.username,"password":this.password};
this._productService.getLogin(logobj).subscribe(prods => Dataservice.loguser = prods,
   err => console.log(err),
     ()=>{//console.log(Dataservice.loguser);
         if(Dataservice.loguser){
          //   alert("Login สำเร็จเรียบร้อย");
             Dataservice.isLogin=true;this._dt.isLog=true;
             this.isLogin=true;
             this._dt.profile = Dataservice.loguser; 
          //   this._dt = Dataservice.loguser;
           //alert(  this._dt);

//console.log(Dataservice.loguser);
}
     else{alert("username หรือ รหัสผ่านไม่ถูกต้อง โปรดลองใหม่");} 
this.username="";
this.password="";
return false;


});
    }
}
