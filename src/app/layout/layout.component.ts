import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    public isLeftPanelOpen = true;

    @Input()
    public enableLeftPanel = false;

    public isRightPanelOpen = false;

    @Input()
    public enableRightPanel = false;

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
