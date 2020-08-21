import {NgModule} from '@angular/core';
import {ButtonComponent} from './button/button.component';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  exports: [ButtonComponent]
})
export class ComponentsModule {
}
