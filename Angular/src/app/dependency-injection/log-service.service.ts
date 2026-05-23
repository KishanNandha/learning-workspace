import { Injectable } from '@angular/core';

/* @Injectable({
  providedIn: 'root' //no need to decorate this as this service is not using any other service(not injecting anything)
}) */
export class LogServiceService {

  constructor() { }

  log(username) {
    console.log(username);
  }
}
