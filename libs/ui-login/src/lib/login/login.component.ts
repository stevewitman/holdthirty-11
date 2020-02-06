import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'ui-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  get email() {
    return this.form.get('email')
  }

  get password() {
    return this.form.get('password')
  }
  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['',   [
        Validators.required,
        Validators.minLength(4)
      ]]
    })
  }

  onSubmit() {
    if (this.form.invalid) return;
    this.router.navigate(['/projects'])
  }


}
