import { Component, OnInit } from '@angular/core';
import {ReadFileService} from "../../read-file/read-file.service";
import {ur_PK} from "ng-zorro-antd/i18n";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(public readonly readFileService: ReadFileService) { }

  ngOnInit() {
  }

  change(event: any) {
    this.readFileService.change(event.target.files[0]);
  }

  protected readonly ur_PK = ur_PK;
}
