import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    public fullName = 'Dustin Cleveland';

    public constructor() { }

    public ngOnInit(): void {
    }
}
