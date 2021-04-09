import { Component } from '@angular/core';

@Component({
    selector: 'input-test',
    templateUrl: './input.test.html',
    styleUrls: ['./input.test.css']
})
export class InputTest {
    value = ''

    onClick(event: any) {
        console.log(event)
        this.value = event.detail.value
    }
}
