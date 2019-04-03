import { Component } from '@angular/core';
import { GetdataService } from './getdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';
  data:object;
  mo:object;
  amount;
  months;
  constructor(private http:GetdataService){}
  onSubmit(){
    this.http.getdata(this.amount,this.months).subscribe((data)=>{
      //console.log(data)
      this.data=data
      
      return data
    })
  }
  amountchange(event){
     let amountvalue = event.target.value;
     console.log(amountvalue)
     if(this.months){
      this.http.getdata(amountvalue,this.months).subscribe((data)=>{
        console.log(data)
        this.data=data
        
        return data
      })
     }
    
  }
}
