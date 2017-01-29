import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from "@angular/router";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private myRoute:Router) {

   }

  ngOnInit() {
  }

userReg(){
    this.myRoute.navigate(['/SignUp']);
  }
  LoginPage(){
    this.myRoute.navigate(['/SignIn']);
  }

}
