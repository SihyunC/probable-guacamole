import { Component, OnInit } from '@angular/core';
import { ChefsService } from 'src/app/services/chefs.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.css']
})
export class ChefsComponent implements OnInit {

  public page = 1;
  pageSize = 10;
  
  
  id = {}
  chefsList: any;
  constructor(private _chefService: ChefsService, private _router: Router, private sanitizer: DomSanitizer) {
    this.chefsList = []
   }

   public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ngOnInit(): void {
    this._chefService.getChefsList(this.page, this.pageSize)
    .subscribe(
      res => this.chefsList = res,
      err => console.log(err)
    );
  }

  acceptChef(id){
    this._chefService.acceptChef(id)
    .subscribe(
      res => {
        console.log(res);
        window.location.reload();
      },
      err => console.log(err)
    )
  }

  rejectChef(id){
    this._chefService.rejectChef(id)
    .subscribe(
      res => {
        console.log(res);
        window.location.reload();
      },
      err => console.log(err)
    )
  }


}
