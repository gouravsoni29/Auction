import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-cutomdash',
  templateUrl: './cutomdash.component.html',
  styleUrls: ['./cutomdash.component.css']
})
export class CutomdashComponent implements OnInit {

  customerID!: number;
  customer!: Customer;
  constructor(private route: ActivatedRoute,private customerService: CustomerService){

  }
  ngOnInit(): void{
this.customerID = this.route.snapshot.params['customerID'];
this.customer = new Customer();
this.customerService.getCustomerById(this.customerID).subscribe(data=>{
  this.customer=data;
})
  }
}
