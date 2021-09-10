import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  showTabs = false;
  constructor(private router: Router) {
    this.getCurrentRoute();
  }

  getCurrentRoute() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if(event.url.includes('play-ground')){
        this.showTabs = true;
        }
      }
    });
  }
}
