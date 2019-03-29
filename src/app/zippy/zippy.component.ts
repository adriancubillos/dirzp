import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: [ './zippy.component.css' ]
})
export class ZippyComponent {
  // tslint:disable-next-line:no-input-rename
  @Input('title') title: string;

  // tslint:disable-next-line:no-input-rename
  @Input('isExpanded') isExpanded: boolean;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
