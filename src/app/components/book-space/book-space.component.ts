import { Component, OnInit } from '@angular/core';
import { AngularFire , FirebaseListObservable, AuthProviders, AuthMethods} from 'angularfire2';
import { ActivatedRoute , Router} from "@angular/router";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-book-space',
  templateUrl: './book-space.component.html',
  styleUrls: ['./book-space.component.css']
})
export class BookSpaceComponent implements OnInit {

 location: FirebaseListObservable<any[]>;
 constructor(private af: AngularFire , private myRoute:Router) {
  this.location = af.database.list('/location');
  }

  addLocation(eve,form): boolean {
    console.log(form);
        eve.preventDefault();

    console.log(this.location);
    this.location.push(form);
    return false;
  }

  ngOnInit() {
  }

}
