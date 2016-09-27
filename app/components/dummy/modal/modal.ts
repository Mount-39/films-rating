import {Component, Input, Output, EventEmitter} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
    selector: 'modal',
    styleUrls: ['app/components/dummy/modal/modal.css'],
    template: `
<div class="modal" (click)="close()">
    <div class="center animated zoomIn">
        <h2>Trailers:</h2>
        <span *ngFor="let trailer of trailers" [innerHTML]="sanitizeHTML(trailer.embed)">
        </span>
    </div>
</div>
`
})
export class Modal {
    @Input() trailers: any[];
    @Output() isClose: EventEmitter<any> = new EventEmitter();

    constructor(private sanitizer: DomSanitizer) {

    }

    private sanitizeHTML(html: any): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }

    private close(): void {
        this.isClose.emit(true);
    }
}