import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  @ViewChild('datepicker1') public datepicker1: ElementRef;

  constructor() {}

  ngOnInit() {
    $(this.datepicker1.nativeElement).fdatepicker({
      initialDate: '31-12-2017',
      format: 'dd-mm-yyyy',
      disableDblClickSelection: true
    });
  }
}
