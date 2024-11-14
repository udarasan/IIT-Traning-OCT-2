import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    ReactiveFormsModule,HttpClientModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  userForm: FormGroup;

  constructor(private fb:FormBuilder,private http:HttpClient) {
    this.userForm=this.fb.group({
      username:[''],
      password:[''],
      fName:[''],
      sName:[''],
      email:['']
    })
  }

  onSubmit() {
    //request send >> backend
    console.log(this.userForm.value)

    const formData=this.userForm.value
    //send a post http request to the backend server
    this.http.post('http://localhost:8080/api/v1/user/createUser',formData).subscribe(
      (response)=>{
        console.log("User Saved!",response);
      },
      (error)=>{
        console.error('Error Saving User',error)
      }
    )


  }


}
