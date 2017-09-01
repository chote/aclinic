
import { NgModule } from '@angular/core';
import { PscShareModule } from './../psc_shared/psc_shared.module';
import { CommonModule } from '@angular/common';
import { GovComponent } from './gov.component';

@NgModule({
  imports: [
    CommonModule,PscShareModule
  ],
  declarations: [GovComponent]
})
export class GovModule { }
