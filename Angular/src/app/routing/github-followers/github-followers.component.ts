import { GithubFollowersService } from './../../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(private route: ActivatedRoute, private service: GithubFollowersService) { }

  ngOnInit() {

   let newObservable = combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]);

    newObservable.pipe(
      switchMap(combined => {
        let id = combined[0].get('id');
        let page = combined[1].get('page');
        //call service to get data based on id and page
        return this.service.getAll();
      }))
    .subscribe(followers => this.followers = followers);
  }
}