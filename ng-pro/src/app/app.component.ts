import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-test';
  name = ''

  isConfirm = false

  onClick(event: any) {
    console.log(event)
    this.isConfirm = true
  }

  onAiInput(event: any) {
    console.log('input', event.target.value)
    this.name = event.target.value

    if (this.isConfirm) {
      this.isConfirm = false
    }
  }
}
