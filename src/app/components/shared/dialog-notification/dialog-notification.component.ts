import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-notification',
  templateUrl: './dialog-notification.component.html',
  styleUrls: ['./dialog-notification.component.scss'],
})
export class DialogNotificationComponent implements OnInit {
  public message: string = '';
  constructor(@Inject(MAT_DIALOG_DATA) public data: string, private matDialogRef: MatDialogRef<DialogNotificationComponent>) {

  }
  ngOnInit(): void {
    console.log(this.data);
    this.message = this.data
  }

  public close(){
    this.matDialogRef.close()
  }
}
