import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule here
// import { SidebarComponent } from './sidebar.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  // declarations: [SidebarComponent],
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Output() sectionSelected = new EventEmitter<string>();

  navigate(section: string) {
    this.sectionSelected.emit(section);
  }

  //
  activeTabPosition = 0;
  animate = false;

  selectTab(tabNumber: number) {
    switch (tabNumber) {
      case 1:
        this.activeTabPosition = 0;
        break;
      case 2:
        this.activeTabPosition = 40;
        break;
      case 3:
        this.activeTabPosition = 80;
        break;
      case 4:
        this.activeTabPosition = 120;
        break;
      case 5:
        this.activeTabPosition = 160;
        break;
      case 6:
        this.activeTabPosition = 200;
        break;
      case 7:
        this.activeTabPosition = 240;
        break;
      case 8:
        this.activeTabPosition = 280;
        break;
    }
    this.animate = true;
    setTimeout(() => {
      this.animate = false;
    }, 800);
  }
}
