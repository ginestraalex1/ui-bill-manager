import { Component } from '@angular/core';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    imports: [ToolbarComponent, SidenavComponent],
})
export class HomePageComponent {}
