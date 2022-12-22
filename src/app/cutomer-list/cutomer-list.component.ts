import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-cutomer-list',
  templateUrl: './cutomer-list.component.html',
  styleUrls: ['./cutomer-list.component.css']
})
export class CutomerListComponent implements OnInit {

  customers!: Customer[];
  customerID!: number;
 customer: Customer = new Customer();
  constructor(private customerService: CustomerService, private router:Router){

  }
  ngOnInit(): void {
    this.getCustomers();
  }
  private getCustomers(){
    this.customerService.getCustomerList().subscribe(data => {
      this.customers=data;
    })
  }

  customerDeletion(customerID:number){
    this.customerService.deleteCustomer(customerID).subscribe(data=>{
      console.log(data);
      this.getCustomers()
    })
   }
   viewTheCustomer(customerID:number){
    this.router.navigate(['view-customer',customerID]);
  }
  updateTheCustomer(customerId:number){
    this.router.navigate(['update-customer',customerId]);
  }

}
