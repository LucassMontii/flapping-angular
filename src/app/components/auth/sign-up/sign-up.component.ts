import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { IResponse, IUser } from 'src/app/interfaces/auth.interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { DialogNotificationComponent } from '../../shared/dialog-notification/dialog-notification.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  public form: FormGroup = {} as FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    public dialog: MatDialog,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.form = this.fb.group({
      userName: '',
      email: '',
      password: '',
    });
  }

  public signUp() {
    const body = {
      userName: this.form.get('userName')?.value,
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value,
    };
    
    this.authService.signUp(body).subscribe({
      next: (res: IResponse<IUser>) => {
        const data = 'Usuario creado con éxito'
        this.dialog
          .open(DialogNotificationComponent, {data})
          .afterClosed()
          .subscribe((res) => {
            console.log(res);
            this.route.navigate(['auth/login'])
          });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
