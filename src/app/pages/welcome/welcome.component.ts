import { Component, OnInit } from '@angular/core';
import {ReadFileService} from "../../read-file/read-file.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  data: any[] = []
  search = '';
  constructor(public readonly readFileService: ReadFileService) { }

  ngOnInit() {
  }

  change(event: any) {
    this.readFileService.change(event.target.files[0], () => {
      this.data = this.readFileService.filter.slice(0, 12)
    });
  }

  page(event: number) {
    const index = event.toString()+'0'
    this.data = this.readFileService.filter.slice(+index - 10, +index + 2)
  }

  searchFilter() {
    this.readFileService.filter = this.readFileService.data.filter(model => model['__EMPTY_2']?.toLowerCase().indexOf(this.search) > -1)
    this.data = this.readFileService.filter.slice(0, 12)
  }
}
