import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import {NzButtonModule} from "ng-zorro-antd/button";
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {NzPaginationModule} from "ng-zorro-antd/pagination";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzIconModule} from "ng-zorro-antd/icon";
import {FormsModule} from "@angular/forms";


@NgModule({
  imports: [WelcomeRoutingModule, NzButtonModule, NgForOf, JsonPipe, NgIf, NzPaginationModule, NzInputModule, NzIconModule, FormsModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
