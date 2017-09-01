import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PscShareModule } from '../psc_shared/psc_shared.module';// ./psc_shared/psc_shared.module';
import { TxroomComponent } from './txroom.component';
import { TxroomAddComponent } from './txroom-add.component';

@NgModule({
  imports: [
    CommonModule,PscShareModule
  ],
  declarations: [TxroomComponent, TxroomAddComponent]
})
export class TxroomModule { }
