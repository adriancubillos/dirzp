import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: [ './github-profile.component.css' ]
})
export class GithubProfileComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  submit() {
    this.router.navigate([ '/followers' ], {
      queryParams:
        {
          page: 1,
          order: 'newest'
        }
    });
  }

  ngOnInit() {
    console.log('onInit Github Profile');
    // if navigating away and comeback
    const idSnap = this.route.snapshot.paramMap.get('id');
    console.log('idSnap', idSnap);
    // if staying in this page looking at different data
    this.route.paramMap.subscribe((params) => {
      const id = +params.get('id'); // + to pass as number
      console.log('id', id);
    });
  }
}
