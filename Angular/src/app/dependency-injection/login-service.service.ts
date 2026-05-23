import { LogServiceService } from './../dependency-injection/log-service.service';
import { Injectable } from '@angular/core';

@Injectable({ //this decorator is used to sepecify that this service is using another service (something is injecting into this service)
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private logService: LogServiceService) { }

  doLogin(username) {
    //login code
    this.logService.log(username);
  }
}
