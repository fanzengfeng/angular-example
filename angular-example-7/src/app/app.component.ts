import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') singupForm:NgForm;
  defaultQuestion: string = '万文峰';
  genders:string[] = ['wna','lan'];
  user:{username:string,email:string,secretQuestion:string,answer:string,gender:string} = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted:boolean = false;
  suggestUserName(){
    const suggestedName:string = 'keep-wna';
    // this.singupForm.setValue({
    //   userData:{
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret:'万文峰',
    //   questionAnswer: '',
    //   gender: ''
    // });
    this.singupForm.form.patchValue({
      userData:{
        username:suggestedName
      }
    });
  }
  onSubmit(){
    this.submitted = true;
    this.user.username = this.singupForm.value.userData.username;
    this.user.email = this.singupForm.value.userData.email;
    this.user.secretQuestion = this.singupForm.value.secret;
    this.user.answer = this.singupForm.value.questionAnswer;
    this.user.gender = this.singupForm.value.gender;
    
    this.singupForm.reset();
  }
  // onSubmit(form:ElementRef){
  //   console.log(form);
  // }

}
