import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMsgDirective } from './directive/error-msg.directive';
import { CustomIfDirective } from './directive/custom-if.directive';



@NgModule({
  declarations: [
    ErrorMsgDirective,
    CustomIfDirective
  ],
  exports:[
    ErrorMsgDirective,
    CustomIfDirective
  ]
})
export class SharedModule { }
