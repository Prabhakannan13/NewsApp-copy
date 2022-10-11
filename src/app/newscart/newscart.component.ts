import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-newscart',
  templateUrl: './newscart.component.html',
  styleUrls: ['./newscart.component.css']
})
export class NewscartComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
   fethData=()=>{
     this.myapi.viewNewscart().subscribe(
       (data)=>{
         this.newsData=data
       }
     )
   }

  newsData:any={}


  ngOnInit(): void {
  }

}
