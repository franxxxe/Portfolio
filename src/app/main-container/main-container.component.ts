import { Component, ElementRef, EventEmitter, Output, AfterViewInit, ViewChild } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})

export class MainContainerComponent {
  @ViewChild('section1') section1!: ElementRef;
  @ViewChild('section2') section2!: ElementRef;
  @ViewChild('section3') section3!: ElementRef;
  @ViewChild('section4') section4!: ElementRef;
  @ViewChild('section5') section5!: ElementRef;
  @ViewChild('section6') section6!: ElementRef;
  @ViewChild('section7') section7!: ElementRef;
  @ViewChild('section8') section8!: ElementRef;
  @Output() sectionVisible = new EventEmitter<string>();


  selectedSkill: string = '1';
  selectedNav: string = '1';

  // Method to handle the navigation click
  navSkill(navId: string): void {
    this.selectedSkill = navId;
    this.selectedNav = navId;
  }


  ngAfterViewInit() {
    // OBSERVER
    const options = {
      root: null,
      threshold: 0.9,
    };
    const observer = new IntersectionObserver(this.handleIntersect.bind(this), options);
    // Observe each section
    observer.observe(this.section1.nativeElement);
    observer.observe(this.section2.nativeElement);
    observer.observe(this.section3.nativeElement);
    observer.observe(this.section4.nativeElement);
    observer.observe(this.section5.nativeElement);
    observer.observe(this.section6.nativeElement);
    observer.observe(this.section7.nativeElement);
    observer.observe(this.section8.nativeElement);
  }


  handleIntersect(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Emit the ID of the visible section
        this.sectionVisible.emit(entry.target.id);
      }
    });
  }



  scrollToSection(section: string) {
    switch (section) {
      case 'section1':
        this.section1.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'section2':
        this.section2.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'section3':
        this.section3.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'section4':
        this.section4.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'section5':
        this.section5.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'section6':
        this.section6.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'section7':
        this.section7.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'section8':
        this.section8.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
    }
  }
}






