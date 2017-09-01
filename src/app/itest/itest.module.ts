import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PscShareModule } from '../psc_shared/psc_shared.module';
import { ItestComponent } from './itest.component';

@NgModule({
  imports: [
    CommonModule,PscShareModule
  ],
  declarations: [ItestComponent]
})
export class ItestModule { }
