import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-slide-home',
  templateUrl: './slide-home.component.html',
  styleUrls: ['./slide-home.component.css']
})
export class SlideHomeComponent implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.startAnimation();
  }

  startAnimation() {
    const content = this.el.nativeElement.querySelector('.slide-content');
    content.style.width = `${content.scrollWidth}px`;
  }
}
