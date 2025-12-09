import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[autoShrink]'
})
export class AutoShrinkDirective implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const element = this.el.nativeElement;
    const maxHeight = element.clientHeight;
    let fontSize = parseFloat(window.getComputedStyle(element).fontSize);

    // 세로 공간 초과 여부 확인하며 폰트 줄이기
    while (element.scrollHeight > maxHeight && fontSize > 8) {
      fontSize -= 0.5;
      element.style.fontSize = fontSize + 'px';
    }
  }
}
