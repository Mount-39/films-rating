import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'top-20',
    styleUrls: ['app/pages/top20/top20.css'],
    template: `
<div>
    <div class="posters">
        <poster></poster>
        <poster></poster>
        <poster></poster>
        <poster></poster>
        <poster></poster>
    </div>
</div>
`
})
export class Top20 implements OnInit{
    ngOnInit() {

    }
}
