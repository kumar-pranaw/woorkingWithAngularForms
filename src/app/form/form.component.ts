import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  selectSubscription = 'Advanced';
  @ViewChild('signupForm') sgnForm: NgForm;
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.sgnForm.value);
  }
}
