import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service: UserService) { }

  ngOnInit(): void {
  }


onSubmit(data: any){//does not do anything yet just put it here to get rid of errors in html-william
  let values = data.form.value;
  let user: User = {firstName: values.firstName, lastName: values.lastName, email: values.email, password: values.password}
  console.log(user);
  this.service.addUser(user).subscribe(response => {
    console.log(response)
  });

}
}