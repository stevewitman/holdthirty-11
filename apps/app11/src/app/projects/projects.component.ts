import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ProjectsService, Project } from '@nx11/core-data';
import { NotificationsService } from '@nx11/ui-notifications';

@Component({
  selector: 'nx11-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$;
  selectedProject: Project;
  form: FormGroup;
  message: string;

  constructor(
    private projectsService: ProjectsService,
    private formBuilder: FormBuilder,
    private notifications: NotificationsService
  ) { }

  ngOnInit() {
    this.getProjects();
    this.initForm();
  }

  getProjects() {
    this.projects$ = this.projectsService.getProjects();
  }

  selectProject(project: Project) {
    this.selectedProject = project;
    this.form.patchValue(project);
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      title: ['', Validators.compose([Validators.required])],
      details: ['', Validators.compose([Validators.required])]
    })
  }

  saveProject(project: Project) {
    if (!project.id) {
      this.createProject(project);
    } else {
      this.updateProject(project);
    }
  }

  createProject(project) {
    this.projectsService.createProject(project)
      .subscribe(result => {
        this.getProjects();
        this.resetProject();
    });
    this.message = project.title + ' added.'
    this.notifications.notification(this.message)
  }

  updateProject(project) {
    this.projectsService.updateProject(project)
      .subscribe(result => {
        this.getProjects();
        this.resetProject();
      });
    this.message = project.title + ' updated.'
    this.notifications.notification(this.message)
  }

  resetProject() {
    const emptyProject: Project = {
      id: null,
      title: '',
      details: '',
      importanceLevel: 0
    }
    this.selectProject(emptyProject);
  }

  cancel () {
    this.resetProject();
  }

  deleteProject(project) {
    this.projectsService.deleteProject(project.id)
      .subscribe(result => this.getProjects());
    this.message = project.title + ' deleted.'
    this.notifications.notification(this.message)
  }

}
