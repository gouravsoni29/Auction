import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Seller } from '../seller';
import { SellerService } from '../seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  sellerID!: number;
  seller!: Seller;
  constructor(private route: ActivatedRoute,private sellerService: SellerService,private router:Router){

  }
  ngOnInit(): void{
this.sellerID = this.route.snapshot.params['sellerID'];
this.seller = new Seller();
this.sellerService.getSellerById(this.sellerID).subscribe(data=>{
  this.seller=data;
})
  }
}
