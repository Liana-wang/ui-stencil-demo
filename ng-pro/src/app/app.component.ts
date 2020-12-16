import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-test';

  onClick(event: any) {
    console.log(event)
  }

  onAiInput(event: any) {
    console.log('input', event)
  }
}
