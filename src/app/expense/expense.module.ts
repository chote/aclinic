import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PscShareModule } from './../psc_shared/psc_shared.module';
import { ExpenseComponent } from './expense.component';

@NgModule({
  imports: [
    CommonModule,PscShareModule
  ],
  declarations: [ExpenseComponent]
})
export class ExpenseModule { }
