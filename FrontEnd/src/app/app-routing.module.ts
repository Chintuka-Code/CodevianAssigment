import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import { UserDetailsEditComponent } from './component/user-details-edit/user-details-edit.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { LoginComponent } from './component/login/login.component';
import { MainComponent } from './component/main/main.component';
import { LgoingurdGuard } from './gurd/lgoingurd.guard';
import { AllUserComponent } from './component/all-user/all-user.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'main',
    component: MainComponent,
    canActivate: [LgoingurdGuard],
    children: [
      {
        path: '',
        component: UserDetailsComponent,
        children: [
          { path: '', component: UserProfileComponent },
          { path: 'edit', component: UserDetailsEditComponent },
          { path: 'user', component: AllUserComponent },
        ],
      },
    ],
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
