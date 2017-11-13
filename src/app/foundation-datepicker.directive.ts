import { Directive, ElementRef, Input } from '@angular/core';

declare let $: any;

@Directive({ selector: 'input[foundation-datepicker]' })
export class FoundationDatepickerDirective {
    constructor(el: ElementRef) {
       $(el.nativeElement).fdatepicker({
        initialDate: '31-12-2017',
        format: 'dd-mm-yyyy'
      });
    }
}
