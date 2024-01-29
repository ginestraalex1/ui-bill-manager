import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'sidenav-element',
    templateUrl: './sidenav-element.component.html',
    styleUrl: './sidenav-element.component.scss',
    standalone: true,
    imports: [MatIconModule, MatDividerModule, RouterModule],
})
export class SidenavElementComponent {
    @Input({ required: true }) name!: string;
    @Input({ required: true }) icon!: string;
    @Input({ required: true }) routerLink!: string;
}
