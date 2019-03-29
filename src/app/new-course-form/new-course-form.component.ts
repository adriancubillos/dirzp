import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: [ './new-course-form.component.css' ]
})
export class NewCourseFormComponent {
  form = new FormGroup({
    topics: new FormArray([])
  });

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
