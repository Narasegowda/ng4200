import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Page } from '../../../services/navigation/navigation.service';
import {MatToolbarModule} from '@angular/material';

@Component({
    selector: 'app-nav-toolbar',
    templateUrl: './nav-toolbar.component.html',
    styleUrls: ['./nav-toolbar.component.scss'],
})
export class NavToolbarComponent implements OnInit {
    @Input() activePage: Page;
    @Input() previousUrl: string[];
    @Output() toggleSideNav = new EventEmitter();
    @Output() logout = new EventEmitter();

    constructor() {}

    ngOnInit() {}

    public onToggleSideNav() {
        this.toggleSideNav.emit();
    }

    public onLogout() {
        this.logout.emit();
    }
}
