import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  public addAsyncValidator(
    control: AbstractControl,    
  ): void {
    control.setAsyncValidators(this.validateAnyControl.bind(this));
    control.updateValueAndValidity({ onlySelf: true });
  }

  public validateAnyControl(): Observable<any> {
    return of({ error: true });
  }

}
