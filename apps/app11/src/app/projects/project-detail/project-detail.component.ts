import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'nx11-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  currentProject;
  originalTitle;

  @Input() form: FormGroup;
  @Input() set project(value) {
    if (value) this.originalTitle = value.title;
    this.currentProject = Object.assign({}, value);
  };
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.saved.emit(this.form.value);
  }

  onClear() {
    this.cancelled.emit(this.currentProject);
  }

}
