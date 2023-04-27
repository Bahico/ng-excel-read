import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ReadFileService {
  data: any[] = [];
  filter: any[] = [];

  constructor() { }

  change(file: any, call: () => void) {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      const binaryString = event.target.result;
      const workbook = XLSX.read(binaryString, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      const data = XLSX.utils.sheet_to_json(worksheet, {raw: true});
      let index = 0;
      data.map(object => {
        ++index;
        const cellAddress = XLSX.utils.encode_cell({ r: index, c: 2 });
        const cell = worksheet[cellAddress]
        if (cell) {
          // @ts-ignore
          const object1 = {...object, url: cell.l?.Target}
          this.data.push(object1)
        }
      })
      this.filter = this.data
      call()
    };
    reader.readAsBinaryString(file);
  }
}
