import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // subscriptions = ['Basic', 'Advanced', 'Pro'];
  // selectSubscription = 'Advanced';
  // @ViewChild('signupForm') sgnForm: NgForm;
  genders = ['Male', 'Female'];
  forbiddenUserName = ['Anna', 'Kelly'];
  signUpForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup ({
      'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    this.signUpForm.valueChanges.subscribe(
      (value) => console.log(value)
    );
    this.signUpForm.statusChanges.subscribe(
      (value) => console.log(value)
    );
    this.signUpForm.setValue({
      'userData': {
        'username': 'Max',
        'email': 'max@test.com'
      },
      'gender': 'male',
      'hobbies': []
    });
  }
  onSubmit() {
    console.log(this.signUpForm);
    this.signUpForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
      (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
  if (this.forbiddenUserName.indexOf(control.value) !== -1) {
    return {'nameIsForbidden': true };
  }
  return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
            resolve({'emailIsForbidden' : true});
        } else {
           resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
