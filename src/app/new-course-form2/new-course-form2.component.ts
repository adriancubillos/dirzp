import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'new-course-form2',
  templateUrl: './new-course-form2.component.html',
  styleUrls: [ './new-course-form2.component.css' ]
})
export class NewCourseForm2Component {
  form;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: [ '', Validators.required ],
      contact:
        fb.group({
          email: [],
          phone: []
        }),
      topics: fb.array([])
    });
  }

  theErrors: { [k: string]: any } = {};

  addTopic(topic: HTMLInputElement) {
    this.theErrors = {};
    topic.value = topic.value.trim();

    if (topic.value.length < 3) {
      this.theErrors.invalidLength = true;
    }

    if (topic.value.indexOf(' ') >= 0) {
      this.theErrors.cannotHaveSpaces = true;
    }

    if (Object.keys(this.theErrors).length > 0) {
      return this.form.setErrors(this.theErrors);
    }

    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: FormControl) {
    const index = this.topics.controls.indexOf(topic);
    // this.topics.controls.splice(index, 1); //FIXME:also worked I did it.
    this.topics.removeAt(index);
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }
}
