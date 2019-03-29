import { Component, OnInit } from '@angular/core';
import { FollowersService } from '../services/followers.service';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: [ './followers.component.css' ]
})
export class FollowersComponent implements OnInit {
  followers: any[];

  constructor(private followersSvc: FollowersService, private route: ActivatedRoute) {}

  ngOnInit() {
    combineLatest([ this.route.paramMap, this.route.queryParamMap ])
      .pipe(
        switchMap((combined) => {
          const id = combined[0].get('id');
          const page = combined[1].get('page');
          return this.followersSvc.getAll();
          // .subscribe((followers: any) => (this.followers = followers));
        })
      )
      .subscribe((followers: any) => {
        this.followers = followers;
      });
  }
}
