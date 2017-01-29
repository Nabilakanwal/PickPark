import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { config } from './../environments/config';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { RouterModule, Routes } from '@angular/router';
import { AccordionModule } from 'ng2-bootstrap';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { BookSpaceComponent } from './components/book-space/book-space.component';
import { ViewLocationsComponent } from './components/view-locations/view-locations.component';
import { DataHandlingService } from './myServices/data-handling.service';
import { BookSlotComponent } from './components/book-slot/book-slot.component';

const appRoutes: Routes = [
  { path: '', component: MainPageComponent },
{ path: 'SignUp', component: RegisterUserComponent},
{ path: 'SignIn', component: SignInComponent },
{ path: 'HomePage', component: HomepageComponent },
{ path: 'BookSpace', component: BookSpaceComponent },
{ path: 'ViewLocations', component: ViewLocationsComponent },
{ path: 'bookSlot/:id', component: BookSlotComponent }
 ]
  
  // { path: 'ViewParkingLocations', component: ViewParkingLocationsComponent },
  // { path: 'ViewSlots/:id', component: ViewSlotsComponent }
  

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    SignInComponent,
    HomepageComponent,
    MainPageComponent,
    BookSpaceComponent,
    ViewLocationsComponent,
    BookSlotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(config)
  ],
  providers: [DataHandlingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
