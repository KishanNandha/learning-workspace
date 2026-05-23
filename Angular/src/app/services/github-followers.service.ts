import { MyHttpService } from './../webservice/myHttpService';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GithubFollowersService extends MyHttpService {

  constructor(http: Http) {
    super('https://api.github.com/users/mosh-hamedani/followers', http);
  }
}
