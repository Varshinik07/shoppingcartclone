import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }

  fetchData=()=>{
    this.myapi.viewproductlist().subscribe(
        (data)=>{
          this.productList=data
        }
      )
    }
    
  
  productList:any=[]

  ngOnInit(): void {
  }

}
