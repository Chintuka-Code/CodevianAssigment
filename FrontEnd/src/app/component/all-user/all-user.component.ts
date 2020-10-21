import { Component, OnInit } from '@angular/core';
import { GetallUserService } from '../../service/getall-user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.scss'],
})
export class AllUserComponent implements OnInit {
  constructor(private userservice: GetallUserService) {}
  response;
  data;
  getuser() {
    this.userservice.getalluser().subscribe((res) => {
      this.response = res;

      if (this.response.err == 0) {
        this.data = this.response.data;
      } else {
        Swal.fire({
          title: 'Error',
          text: `some error`,
          icon: 'error',
        });
      }
    });
  }

  ngOnInit(): void {
    this.getuser();
  }
}
