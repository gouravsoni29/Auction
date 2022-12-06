import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppModule } from '../app.module';
import { Product } from '../product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductviewComponent implements OnInit {

  product?:Product[];
  constructor(private pservice:ProductService,private router:Router) { }

  ngOnInit(): void {

    this.product=[{
      id:1,
      name:"Iphone",
      cat:"Electronics",
      specification:"256Gb"
    },
    {
      id:2,
      name:"Redmi",
      cat:"Electronics",
      specification:"64Gb,8gb ram"
    },
    {
      id:3,
      name:"Activa",
      cat:"Vehicle",
      specification:"125cc"
    }
  ];
  }

  
  addProduct(){
    this.router.navigate(['add-new']);
  }
  deleteProduct(id?:number){
    alert("Do ypou want to delete this product")
    

  }

}
