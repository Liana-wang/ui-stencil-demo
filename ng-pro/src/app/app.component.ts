import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-test';
  name = ''

  options = [
    {
      id: "11",
      text: "React",
    },
    {
      id: "22",
      text: "Vue",
    },
    {
      id: "33",
      text: "Angular",
    },
    {
      id: "44",
      text: "JavaScript",
    }
  ]

  selected = {
    id: "44",
    text: "JavaScript",
  }

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

  onSelectChange(event: any) {
    this.selected = event.detail.value
    console.log('event', event)
  }
}
