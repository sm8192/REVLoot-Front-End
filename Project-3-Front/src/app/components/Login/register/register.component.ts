import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errorMsg = "";

  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
  }


onSubmit(data: any){
  let values = data.form.value;
  let user: User = {firstName: values.firstName, lastName: values.lastName, email: values.email, password: values.password}
  console.log(user);
  this.service.addUser(user).subscribe(response => {
    this.errorMsg = '';
    console.log(response)
    localStorage.setItem("username", response.email)
    this.router.navigateByUrl("productList")
  }, error => {
    console.log(error);
    this.errorMsg = error.error.message;
    localStorage.removeItem("username");
    console.log(this.errorMsg);
    this.router.navigateByUrl("productList")
  });
}
}
