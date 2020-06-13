import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PlateService {

  private _platesCategoryUrl = "https://mycheffy.herokuapp.com/category/"
  constructor(private http: HttpClient) { }

  getPlatesCategoryList() {
    return this.http.get<any>(this._platesCategoryUrl) 
  }

  getPlatesCategory(id){
    let url = this._platesCategoryUrl + id
    console.log(url)
    return this.http.get<any>(url);
  }

  createPlateCategory(data){
    let header = new HttpHeaders().set(
      "x-access-token",
      localStorage.getItem("token")
    );
    return this.http.post<any>(this._platesCategoryUrl, data, {headers:header})
  }

  editPlateCategory(id, data){
    let header = new HttpHeaders().set(
      "x-access-token",
      localStorage.getItem("token")
    );
    let url = this._platesCategoryUrl + "edit/" + id 
    return this.http.put<any>(url, data, {headers:header} );
  }
  
}
