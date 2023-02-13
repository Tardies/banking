import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { AppServiceService } from '../appService/app-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  password: String = "";

  constructor(private appServiceService: AppServiceService) {

  }
  onSubmit() {
    if (this.password == "Dumal") {
      console.log("Success");
      this.appServiceService.callFunction();
    }
  }

}
