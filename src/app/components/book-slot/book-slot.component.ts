import { Component, OnInit } from '@angular/core';
import { AngularFire , FirebaseListObservable, AuthProviders, AuthMethods,FirebaseObjectObservable} from 'angularfire2';
import { ActivatedRoute , Router} from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { DataHandlingService } from '../../myServices/data-handling.service';

@Component({
  selector: 'app-book-slot',
  templateUrl: './book-slot.component.html',
  styleUrls: ['./book-slot.component.css']
})
export class BookSlotComponent implements OnInit {

showlotsForm : boolean = false;
  BookingLocSpaces: FirebaseObjectObservable<any>;
  tempID : any;
  SlotsArray ;
  currentSlotsToView;
  successDetails;
  slotValue;
  reservedParkingForToday;

  constructor(private af: AngularFire , private myRoute:Router, private ActivatedRoutes: ActivatedRoute,private reserveSlots : DataHandlingService ) { 
    this.reservedParkingForToday =[]
    ActivatedRoutes.params.subscribe(currentRoute => {
        console.log("fff",currentRoute);
        this.tempID = currentRoute
        this.af.database.object('/BookingLocSpaces/'+ this.tempID.id)
         .subscribe(parkingObj => {
          this.successDetails = parkingObj;
          this.currentSlotsToView = this.successDetails.Spaces;

          this.SlotsArray = [];
          console.log('this.SlotsArray', this.SlotsArray)
          for (let i =1; i <= this.currentSlotsToView; i++) {
            this.SlotsArray.push(i);
          }
        })
         this.af.database.list('/ReserveSlotParking', {query : { orderByChild: 'slotKey', equalTo: this.tempID.id}})
      .subscribe(reservedParkings => {
        /*console.log("reservedParkings")
        console.log(reservedParkings)*/
        this.getReservedParkings(reservedParkings)
      })
    })
  }

  getReservedParkings( parkings ){
    let currentDate = new Date();
    var reservedParkingForToday = [];
    if(parkings && parkings.length){
      parkings.forEach( parking => {
        let savedDate     = new Date(parking.startDate);
        let savedTime     = parking.startTime.split(":");
        savedDate.setHours(parseInt(savedTime[0]));
        savedDate.setMinutes(parseInt(savedTime[1]));

        let endDate = new Date(savedDate);
        endDate.setHours(endDate.getHours() + parseInt(parking.hours) );

        if(savedDate < currentDate && currentDate < endDate){
          if(reservedParkingForToday.indexOf(parking.slotNumber) == -1){
            reservedParkingForToday.push(parking.slotNumber);
          }
        }
      });
    }
    this.reservedParkingForToday = reservedParkingForToday;
  }
      saveLotInfo(formData){
      let slotFormData = {startDate: formData.startDate, startTime: formData.startTime, hours: formData.hours, slotKey: this.tempID.id, slotNumber: this.slotValue, slotParkingLocationName: this.successDetails.location};
      this.reserveSlots.addReserveSlot(slotFormData);  }

  
showLotForm(a : any){
  this.showlotsForm = true;
  this.slotValue = a;
}
    ngOnInit(){

    }
}


