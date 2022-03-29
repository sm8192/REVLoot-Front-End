import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User | null = null

  constructor(private service: UserService) { }

  ngOnInit(): void {
  }
  onSubmit(value:any): void {
    this.service.getUserByCredentials(value.form.value.email, value.form.value.password).subscribe(response => {
      console.log(response);
    })

  }

}
