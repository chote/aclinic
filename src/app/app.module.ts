import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InputTextModule, ButtonModule }  from 'primeng/primeng';
import { Routes, RouterModule } from '@angular/router';
////import { ProductService } from './service/server';
//import {Dataservice} from './shared/dataservice';
import { PscShareModule } from './psc_shared/psc_shared.module';
import { LabComponent } from './lab/lab.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenutabComponent } from './menutab/menutab.component';
import {BaseComponent } from './psc_shared/psc_base.component';
import { LabModule } from './lab/lab.module';
import { TxroomModule } from './txroom/txroom.module';
import { MyformModule } from './myform/myform.module';
import { TxroomComponent } from './txroom/txroom.component';
import { SettingModule } from './setting/setting.module';
import { FdnameComponent } from './setting/fdname.component';
import { MyformComponent } from './myform/myform.component';
import { GovModule } from './gov/gov.module';
import { GovComponent } from './gov/gov.component';
import { ExpenseModule } from './expense/expense.module';
import { ExpenseComponent } from './expense/expense.component';
import { ItestModule } from './itest/itest.module';
import { ItestComponent } from './itest/itest.component';
//import {BaseMainComponent } from './base/base-main/base-main.component';
 const routes: Routes = [
   { path: '', pathMatch: 'full', redirectTo: 'home' },
   { path: 'home', component: HomeComponent },
   { path: 'lab', component: LabComponent },
   { path: 'txroom/:doctorid', component: TxroomComponent }, 
   { path: 'fdname', component: FdnameComponent },
   { path: 'myform', component: MyformComponent },
   { path: 'gov', component: GovComponent },   
   { path: 'expense', component: ExpenseComponent }, 
      { path: 'itest', component: ItestComponent }, 
 ];
@NgModule({
  declarations: [
    AppComponent,HomeComponent, MenutabComponent
  ],
  imports: [
    BrowserModule,PscShareModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,RouterModule.forRoot(routes),
    HttpModule,
    InputTextModule, 
    ButtonModule,LabModule,TxroomModule,SettingModule,
    ReactiveFormsModule,MyformModule ,GovModule,ExpenseModule,ItestModule
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
