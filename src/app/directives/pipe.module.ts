import { NgModule }    from '@angular/core';
import { dateFormatPipe } from './date-format.pipe'
@NgModule({
    imports:        [],
    declarations:   [dateFormatPipe],
    exports:        [dateFormatPipe],
})

export class PipeModule {

  static forRoot() {
     return {
         ngModule: PipeModule,
         providers: [],
     };
  }
} 
