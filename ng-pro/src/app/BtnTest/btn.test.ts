import { Component } from '@angular/core';

@Component({
    selector: 'btn-test',
    templateUrl: './btn.test.html',
    styleUrls: ['./btn.test.css']
})
export class BtnTest {
    count = 0

    onClick(event: any) {
        console.log(event)
        this.count += 1
    }
}
