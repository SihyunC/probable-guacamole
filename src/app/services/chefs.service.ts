import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

  const chefDocsUrl = "https://mycheffy.herokuapp.com/manage/chef/docs/"

@Injectable({
  providedIn: 'root'
})
export class ChefsService {

  private _chefsUrl = "https://mycheffy.herokuapp.com/manage/list/chef/"
  private _chefsAcceptUrl = "https://mycheffy.herokuapp.com/manage/chef/accept/"
  private _chefsRejectUrl = "https://mycheffy.herokuapp.com/manage/chef/reject/"

  private _chefDocsUrl = "https://mycheffy.herokuapp.com/manage/chef/docs"

  constructor(private http: HttpClient) { }

  getChefsList(page: number, pageSize: number){
    let header = new HttpHeaders().set(
      "x-access-token",
      localStorage.getItem("token")
    );
    return this.http.get<any>(`${this._chefsUrl}?page=${page}&pageSize=${pageSize}`, {headers:header});
  }

  acceptChef(id: number){
    let header = new HttpHeaders().set(
      "x-access-token",
      localStorage.getItem("token")
    );
    let url = this._chefsAcceptUrl + id
    return this.http.post<any>(url,{},{headers:header});
  }

  rejectChef(id: number){
    let header = new HttpHeaders().set(
      "x-access-token",
      localStorage.getItem("token")
    );
    let url = this._chefsRejectUrl + id
    return this.http.post<any>(url,{},{headers:header});
  }

  getChefDetails(id){
    let header = new HttpHeaders().set(
      "x-access-token",
      localStorage.getItem("token")
    );
    let url = this._chefsUrl + id
    return this.http.get<any>(url,{headers:header});
  }

  getChefDocsList(){
    let header = new HttpHeaders().set(
      "x-access-token",
      localStorage.getItem("token")
    );
    return this.http.get<any>(this._chefDocsUrl, {headers: header});

  }
  getChefDocsDetails(id){
    let header = new HttpHeaders().set(
      "x-access-token",
      localStorage.getItem("token")
    );
    let url = this._chefDocsUrl + "?" + "userId=" + id
    return this.http.get<any>(url, {headers: header})
    console.log(url)
  }
}
