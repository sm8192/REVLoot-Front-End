import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User | null = null
  errorMsg = "";

  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(value:any): void {
    this.service.getUserByCredentials(value.form.value.email, value.form.value.password).subscribe(response => {
      this.errorMsg = "";      
      localStorage.setItem("username", response.email)
      this.router.navigateByUrl("productList")
    }, error => {
      console.log(error);
      this.errorMsg = error.error.message;
      localStorage.removeItem("username");      
      this.router.navigateByUrl("login")
    })

  }

}
