import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GetUserService } from '../../service/get-user.service';
import Swal from 'sweetalert2';
import { UpdateUserService } from '../../service/update-user.service';
@Component({
  selector: 'app-user-details-edit',
  templateUrl: './user-details-edit.component.html',
  styleUrls: ['./user-details-edit.component.scss'],
})
export class UserDetailsEditComponent implements OnInit {
  register: FormGroup;
  response;
  Updateresponse;
  constructor(
    private fb: FormBuilder,
    private getDetails: GetUserService,
    private update: UpdateUserService
  ) {}

  editForm() {
    const token = localStorage.getItem('token');
    const data = { data: this.register.getRawValue(), token: token };
    this.update.updateUser(data).subscribe((res) => {
      this.Updateresponse = res;
      if (this.Updateresponse.err == 0) {
        Swal.fire({
          title: 'Success',
          text: `Your Profile Update`,
          icon: 'success',
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: `${this.Updateresponse.msg}`,
          icon: 'error',
        });
      }
    });
  }

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

        if (this.response.err == 0) {
          this.register.controls.email.patchValue(this.response.data.email);
          this.register.controls.number.patchValue(this.response.data.number);
          this.register.controls.address.patchValue(this.response.data.address);
        } else {
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
    this.registerValidation();
    this.getUserDetails();
  }
  registerValidation() {
    this.register = this.fb.group({
      email: ['', Validators.required],
      address: ['', Validators.required],
      number: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    });
  }
}
