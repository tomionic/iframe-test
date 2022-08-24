/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { DiaBackendAsset, PaginatedResponse } from './capture-tab.data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-capture-tab',
  templateUrl: './capture-tab.component.html',
  styleUrls: ['./capture-tab.component.scss'],
})
export class CaptureTabComponent implements OnInit {
  private readonly url = 'https://api.numbersprotocol.io/api/v3/assets/';

  private readonly headers = {
    'Content-Type': 'application/json',
    // temporary user token for ionic team
    Authorization: `token ae62c562b5816f4ed35be68e11e4b3c83c96bd58`,
  };

  captures$ = this.http
    .get<PaginatedResponse<DiaBackendAsset>>(this.url, {
      headers: this.headers,
    })
    .pipe(map((response) => response.results));

  constructor(readonly http: HttpClient,
    public router: Router) {}

  ngOnInit() {}

  navDetails(postCapture) {
    let x = postCapture;
    this.router.navigate(["details", {type: 'post-capture', id: x.id}], { replaceUrl: true });
  }
}
