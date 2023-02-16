import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[AdultContent]'
})
export class AdultContentDirective implements OnInit {

  @Input() isAudiltContent: boolean = false;
  constructor(private element:ElementRef) { }

  ngOnInit(): void {
    if(!this.isAudiltContent) {
      this.element.nativeElement.firstElementChild.style.display = 'flex';
    }
  }

}
