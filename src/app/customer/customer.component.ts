import { Component } from '@angular/core';
import { CommonServiceTsService } from '../common.service.ts.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  firstname!: string;
  lastname: any;
  email: any;
  phone: any;
  userId: any;
  password: any;
  availablePetList: any;
  constructor(private commonservice: CommonServiceTsService) { }

  createUsers() {
    let obj = {
      "id": this.userId,
      "username": this.firstname,
      "firstName": this.firstname,
      "lastName": this.lastname,
      "email": this.email,
      "password": this.password,
      "phone": this.phone,
      "userStatus": 1
    }
    
      this.commonservice.createUser(obj).subscribe(
      {
        next: response => console.log(response),
        error: error => console.log(error)
      }

    );

  }
  getAvailablePets(){
    
    this.commonservice.getAvailablePets().subscribe((res:any)=> {
      
      console.log(res)
      this.availablePetList = res;

      

    }, _err=>{

    })
    
    
    
    
  }

}




