import { InputModule } from './../input/input.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';



@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    InputModule
  ],
  exports:[
    ModalComponent
  ]
})
export class ModalModule { }
