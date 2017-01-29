import { Component, OnInit } from '@angular/core';
import { AngularFire , FirebaseListObservable,AuthProviders, AuthMethods} from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute , Router} from "@angular/router";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private af: AngularFire , private myRoute:Router) {
    
   }

  ngOnInit() {
  }
logout(){
  this.af.auth.logout();
  this.myRoute.navigate(['']);
}
}
