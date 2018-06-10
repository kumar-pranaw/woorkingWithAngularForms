import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validator';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css']
})
export class ReactComponent implements OnInit {

  projectForm: FormGroup;

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(
        null,
        [Validators.required, CustomValidators.invalidProjectName],
        CustomValidators.asyncInvalidProjectName
      ),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('critical')
    });
  }

  onSaveProject() {
    console.log(this.projectForm.value);
  }

}
