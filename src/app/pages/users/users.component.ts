import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public page = 1;
  pageSize = 10;
  usersList: any;
  constructor(private _usersService: UsersService, private sanitizer: DomSanitizer) {
    this.usersList = []
  }

  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ngOnInit(): void {
    this._usersService.getUsersList()
      .subscribe(
        res => this.usersList = res,
        err => console.log(err)
      )
  }

}
