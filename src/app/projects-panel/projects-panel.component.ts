import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-projects-panel',
    templateUrl: './projects-panel.component.html',
    styleUrls: ['./projects-panel.component.scss']
})
export class ProjectsPanelComponent implements OnInit {

    public numbers = Array(100).fill(0).map((v, i) => i + 1);

    constructor() { }

    ngOnInit(): void {
    }

}
