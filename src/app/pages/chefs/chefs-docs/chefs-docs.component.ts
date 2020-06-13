import { Component, OnInit } from '@angular/core';
import { ChefsService } from 'src/app/services/chefs.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-chefs-docs',
  templateUrl: './chefs-docs.component.html',
  styleUrls: ['./chefs-docs.component.css']
})
export class ChefsDocsComponent implements OnInit {

  public page = 1;
  pageSize = 10;
  chefDocsList: any;

  constructor(private _chefService: ChefsService, private sanitizer: DomSanitizer) {
    this.chefDocsList = []
   }

  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ngOnInit(): void {
    this._chefService.getChefDocsList()
    .subscribe(
      res => this.chefDocsList = res.data,
      err => console.log(err)
    )
  }

}
