import { Component, OnInit } from '@angular/core';
import { DriversService } from 'src/app/services/drivers.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-drivers-docs',
  templateUrl: './drivers-docs.component.html',
  styleUrls: ['./drivers-docs.component.css']
})
export class DriversDocsComponent implements OnInit {

  public page = 1;
  pageSize = 10;
  driverDocsList: any;

  constructor(private _driversService: DriversService, private sanitizer: DomSanitizer) {
    this.driverDocsList = []
   }

  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ngOnInit(): void {
    this._driversService.getDriverDocsList()
    .subscribe(
      res => this.driverDocsList = res.data,
      err => console.log(err)
    )
  }

}
