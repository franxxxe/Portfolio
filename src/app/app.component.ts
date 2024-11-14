import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContainerComponent } from './main-container/main-container.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, MainContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyPortfolio';

  @ViewChild(MainContainerComponent) mainComponent!: MainContainerComponent;

  // @ViewChild(MainComponent) mainComponent!: MainComponent;
  @ViewChild(SidebarComponent) sidebarComponent!: SidebarComponent;


  ngAfterViewInit() {
    this.mainComponent.sectionVisible.subscribe((sectionId: string) => {
      this.updateActiveTabPosition(sectionId);
    });
  }

  updateActiveTabPosition(sectionId: string) {
    switch (sectionId) {
      case 'section1':
        this.sidebarComponent.activeTabPosition = 0;
        break;
      case 'section2':
        this.sidebarComponent.activeTabPosition = 40;
        break;
      case 'section3':
        this.sidebarComponent.activeTabPosition = 80;
        break;
      case 'section4':
        this.sidebarComponent.activeTabPosition = 120;
        break;
      case 'section5':
        this.sidebarComponent.activeTabPosition = 160;
        break;
      case 'section6':
        this.sidebarComponent.activeTabPosition = 200;
        break;
      case 'section7':
        this.sidebarComponent.activeTabPosition = 240;
        break;
      case 'section8':
        this.sidebarComponent.activeTabPosition = 280;
        break;
    }
  }


  scrollToSection(section: string) {
    this.mainComponent.scrollToSection(section);
  }
}
