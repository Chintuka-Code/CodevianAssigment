import { Component, OnInit } from '@angular/core';
import { GetUserService } from '../../service/get-user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  constructor(private getDetails: GetUserService) {}
  response;
  getUserDetails() {
    if (localStorage.getItem('email') == null) {
      alert('something Wrong');
    } else {
      const data = {
        email: localStorage.getItem('email'),
        token: localStorage.getItem('token'),
      };
      this.getDetails.getuser(data).subscribe((res) => {
        this.response = res;
        if (this.response.err != 0) {
          Swal.fire({
            title: 'Error',
            text: `${this.response.msg}`,
            icon: 'error',
          });
        }
      });
    }
  }

  ngOnInit(): void {
    this.getUserDetails();
  }
}
