import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ReadFileService {
  arrayBuffer: any;
  data: any[] = []

  constructor() { }

  change(file: any) {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      const binaryString = event.target.result;
      const workbook = XLSX.read(binaryString, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      const data = XLSX.utils.sheet_to_json(worksheet, {raw: true}).slice(0, 20);
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
      // for (let row = range.s.r; row <= range.e.r; row++) {
      //   for (let col = range.s.c; col <= range.e.c; col++) {
      //     const cellAddress = XLSX.utils.encode_cell({ r: row, c: col });
      //     const cell = worksheet[cellAddress];
      //
      //     if (cell && cell.l) {
      //       const hyperlink = cell.l.Target;
      //     }
      //   }
      // }
    };

    // let fileReader = new FileReader();
    reader.readAsBinaryString(file);
    // fileReader.onload = (e: any) => {
    //   // const bstr: string = e.target.result;
    //   // const wb = XLSX.read(bstr, { type: 'binary', cellDates: true, dateNF: 'dd/mm/yyyy' });
    //   // const wsname = wb.SheetNames[0];
    //   // const ws = wb.Sheets[wsname];
    //   // ws[XLSX.utils.encode_cell({c: 2, r: 1})] = {v: "Report Url", s: {font : {sz : "11", bold : true}}}
    //   // console.log(XLSX.utils.sheet_to_json(ws, {header: 1}).slice(1,20));
    //
    //   this.arrayBuffer = fileReader.result;
    //   const data = new Uint8Array(this.arrayBuffer);
    //   const arr = [];
    //   for(let i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
    //
    //   const bstr = arr.join("");
    //   const workbook = XLSX.read(bstr, {type: 'binary', cellStyles: true, dateNF: 'dd/mm/yyyy' });
    //   const first_sheet_name = workbook.SheetNames[0];
    //   const worksheet = workbook.Sheets[first_sheet_name];
    //   // console.log(XLSX.utils.sheet_to_json(worksheet, {header: 1}).slice(1, 20));
    //   this.data = XLSX.utils.sheet_to_json(worksheet, {raw: true}).slice(1, 20);
    //   // @ts-ignore
    //   console.log(typeof XLSX.utils.sheet_to_json(worksheet, {raw: true}).slice(1, 20)[1].__EMPTY_2)
    // }
    // fileReader.readAsArrayBuffer(file);
  }
}
