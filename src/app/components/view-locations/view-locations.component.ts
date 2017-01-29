import { Component, OnInit } from '@angular/core';
import { AngularFire , FirebaseListObservable,AuthProviders, AuthMethods} from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute , Router} from "@angular/router";
import { DataHandlingService } from '../../myServices/data-handling.service';

@Component({
  selector: 'app-view-locations',
  templateUrl: './view-locations.component.html',
  styleUrls: ['./view-locations.component.css']
})
export class ViewLocationsComponent implements OnInit {
 BookingLocSpaces;

  constructor(private parkingLocation : DataHandlingService, private myRouter: Router) {
    this.BookingLocSpaces = [];
    this.parkingLocation.getNewLocSubject();

    this.parkingLocation.getNewLocSubject()
      .subscribe(parkingSubject =>{
        this.BookingLocSpaces = parkingSubject;
        console.log("BookingLocSpaces",this.BookingLocSpaces)
      })
      this.parkingLocation.getParkingLocationsDataFromDB();
      
  }

  ngOnInit() {
  }
  
deleteSlots(key: any) {
    console.log('key', key);
    // this.myAuthService.removeData(key);
  };
}