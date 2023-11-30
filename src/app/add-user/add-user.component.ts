import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddUserService } from '../add-user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(private addUserService:AddUserService) { 
  }
  isSubmitted: boolean = false;
  submittedSuccess: boolean = false;
  formTemplate: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    cellno: new FormControl('', Validators.required),
    age: new FormControl('', [Validators.required, Validators.min(18),Validators.max(60)])
  });
  ngOnInit(): void {
  }
  get formControls() {
    return this.formTemplate['controls'];
  }
  onSubmit() {
    this.isSubmitted = true;
    if(this.formTemplate.valid) {
      this.addUserService.addUser(this.formTemplate).subscribe(
        (response) => { 
          console.log(response);
          this.submittedSuccess = true;
        },
        (error) => {
          console.log(error);
        }
       );
    }
  }
}
