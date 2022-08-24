/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  private readonly initialId$ = this.route.paramMap.pipe(
    map((params) => params.get('id'))
  );

  iframeUrlWithToken$ = this.initialId$.pipe(
    distinctUntilChanged(),
    map((id) => {
      // temporary user token for ionic team
      const token = 'ae62c562b5816f4ed35be68e11e4b3c83c96bd58';
      const host = 'https://captureappiframe.bubbleapps.io';
      const path = 'version-test/asset_page';
      const params = `pid=${id}&token=${token}&iframeLoadedFrom=CaptureApp`;
      const url = `${host}/${path}?${params}`;
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    })
  );

  constructor(
    private readonly sanitizer: DomSanitizer,
    private readonly route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit() {}

  navHome() {
    console.log("back");
    this.router.navigate(["/home"]);
  }
}
