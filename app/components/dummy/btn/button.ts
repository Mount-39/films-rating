import {Component, Input} from '@angular/core';

@Component({
    selector: 'btn',
    styleUrls: ['app/components/dummy/btn/button.css'],
    template: `
<button>
    <ng-content></ng-content>
</button>
`
})
export class Btn{
    @Input() text:string;
}
