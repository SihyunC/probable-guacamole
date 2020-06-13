import { Component, OnInit } from '@angular/core';
import { DriversService } from 'src/app/services/drivers.service';
import { Router } from '@angular/router';
import { AcceptService } from 'src/app/services/accept.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {
  
  public page = 1;
  pageSize = 10;

  driversList: any;
  constructor(private _driversService : DriversService, private _router: Router,
    private _acceptService: AcceptService, private sanitizer: DomSanitizer) { 
    this.driversList = []
  }

  ngOnInit(): void {
    this._driversService.getDriversList(this.page, this.pageSize)
    .subscribe(
      res => this.driversList = res,
      err => console.log(err)
    );
  }

  acceptDriver(id){
    this._driversService.acceptDriver(id)
    .subscribe(
      res => {
        console.log(res);
        window.location.reload();
      },
      err => console.log(err)
    )
  }

  rejectDriver(id){
    this._driversService.rejectDriver(id)
    .subscribe(
      res => {
        console.log(res);
        window.location.reload();
      },
      err => console.log(err)
    )
  }

  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}
