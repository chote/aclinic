import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PscShareModule } from '../psc_shared/psc_shared.module';// ./psc_shared/psc_shared.module';
import { MyformComponent } from './myform.component';

@NgModule({
  imports: [
    CommonModule,PscShareModule
  ],
  declarations: [MyformComponent]
})
export class MyformModule { }
