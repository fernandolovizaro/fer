import { ModalModule } from '../shared/component/modal/modal.module';
import { ListaComponent } from './lista/lista.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from '../shared/component/table/table.module';
import { InputModule } from '../shared/component/input/input.module';



@NgModule({
  declarations: [
    ListaComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ModalModule,
    InputModule
  ]
})
export class PagesModule { }
