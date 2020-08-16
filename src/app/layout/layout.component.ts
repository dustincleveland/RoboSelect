import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

    public isLeftPanelOpen = true;
    public isRightPanelOpen = false;

    public constructor() { }

    public ngOnInit(): void {
    }

    public onLeftPanelToggled(): void {
        this.isLeftPanelOpen = !this.isLeftPanelOpen;
    }

    public onRightPanelToggled(): void {
        this.isRightPanelOpen = !this.isRightPanelOpen;
    }
}
