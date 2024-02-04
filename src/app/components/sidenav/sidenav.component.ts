import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SidenavElementComponent } from './sidenav-element/sidenav-element.component';

@Component({
    selector: 'sidenav',
    templateUrl: './sidenav.component.html',
    styleUrl: './sidenav.component.scss',
    standalone: true,
    imports: [
        MatSidenavModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        SidenavElementComponent,
    ],
})
export class SidenavComponent {}
