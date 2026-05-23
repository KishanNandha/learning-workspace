import { LoginServiceService } from './../dependency-injection/login-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.css']
})
export class DependencyInjectionComponent implements OnInit {

  constructor(private loginService: LoginServiceService) { }

  ngOnInit() {
  }

  onSubmit(username) {
    this.loginService.doLogin(username.value);
  }
}
