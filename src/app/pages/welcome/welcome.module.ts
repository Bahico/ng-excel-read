import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import {NzButtonModule} from "ng-zorro-antd/button";
import {JsonPipe, NgForOf, NgIf} from "@angular/common";


@NgModule({
    imports: [WelcomeRoutingModule, NzButtonModule, NgForOf, JsonPipe, NgIf],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
