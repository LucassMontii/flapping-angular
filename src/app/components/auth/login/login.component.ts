import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { IUser } from 'src/app/interfaces/auth.interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { ValidatorService } from 'src/app/services/validator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public form: FormGroup = {} as FormGroup;
  public error: any

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private authService: AuthService,
    private validatorService: ValidatorService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.form = this.fb.group({
      email: '',
      password: '',
    });
  }

  public login() {
    const body: IUser = {
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value,
    };
    this.authService.login(body).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        this.error = err
        console.log(err);
        if(err?.error.message === 'User not found'){
          this.validatorService.addAsyncValidator(this.form.get('email')!);
        }
        if(err?.error.message === 'Incorrect password'){
          this.validatorService.addAsyncValidator(this.form.get('password')!);
        }
      },
    });
  }

  public signUp() {
    this.route.navigate(['/auth/sign-up']);
  }
}
