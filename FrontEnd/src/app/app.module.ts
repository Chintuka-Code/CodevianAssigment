import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './component/login/login.component';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import { UserDetailsEditComponent } from './component/user-details-edit/user-details-edit.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { MainComponent } from './component/main/main.component';
import { AllUserComponent } from './component/all-user/all-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    UserProfileComponent,
    UserDetailsComponent,
    UserDetailsEditComponent,
    NotfoundComponent,
    MainComponent,
    AllUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
