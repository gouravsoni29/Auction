import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService) {}

  public user = {
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
  };


  ngOnInit(): void {
  }
  formSubmit() {
    console.log(this.user);
    if (this.user.username == '' || this.user.username == null) {
      alert('User is required !!');
      
    }

    if (this.user.password == '' || this.user.password == null) {
      alert('User is required !!');
      
    }

    //validate

    //addUser: userservice
    this.userService.addUser(this.user).subscribe(
      (data: any) => {
        //success
        console.log(data);
        alert('success');
        
      },
      (error) => {
        //error
        console.log(error);
        alert('something went wrong');
        
      }
    );
  }


}
