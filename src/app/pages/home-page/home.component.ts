import { Component } from '@angular/core';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [
        MatSidenavModule,
        ToolbarComponent,
        SidenavComponent,
        RouterOutlet,
    ],
})
export class HomeComponent {}
