import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private readonly initialTabIndex = 2;
  private readonly afterCaptureTabIndex = 2;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  selectedTabIndex = this.initialTabIndex;

  constructor() {}

  captureWithCustomCamera() {
    this.selectedTabIndex = this.afterCaptureTabIndex;
  }

  navigateToInboxTab() {}
}
