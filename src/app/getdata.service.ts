import { Injectable } from '@angular/core';
import{HttpClient,HttpErrorResponse} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private http:HttpClient) { }
  baseaddress="https://ftl-frontend-test.herokuapp.com/"
  getdata(amount,month){
    let data=this.http.get(this.baseaddress+'interest?amount='+amount+'&numMonths='+month);
    // console.log(data);
    return data;
  }
}
