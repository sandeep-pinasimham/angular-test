import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  @Input() userData: any;
  constructor(private _activatedRoute: ActivatedRoute , private router: Router) {

    this.router.getCurrentNavigation()
  }

  ngOnInit() {
    this._activatedRoute.data.subscribe((data) => {
      console.log(data);
    });
  }
}

// this.activatedroute.data.subscribe(data => {
//   console.log(data);
// })
