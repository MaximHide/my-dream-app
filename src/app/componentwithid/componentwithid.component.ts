import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, UrlSegment} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-componentwithid',
  templateUrl: './componentwithid.component.html',
  styleUrls: ['./componentwithid.component.css']
})
export class ComponentwithidComponent implements OnInit {

  id;

  private subscription: Subscription;

  constructor(private activetedrouter: ActivatedRoute) {
    this.id = activetedrouter.snapshot.params['id'];
    console.log(this.id);

    // this.subscription = activetedrouter.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit() {
    this.activetedrouter.url.subscribe((s: UrlSegment[]) => {
      console.log('url', s);
    });

  }

}
